//Here you define the different routes (endpoints) your API will have. 
//Each route will be associated with a function that executes when the route is accessed. 
//This includes your media file upload and conversion endpoint.

use actix_multipart::Multipart;
use actix_web::HttpResponse;
use crate::utils;
use crate::converter;
use std::fs::File;
use std::io::Read;
use std::fs;

pub async fn upload_file(payload: Multipart) -> HttpResponse {
    let result = utils::handle_file_upload(payload).await;

    match result {
        Ok((file_name, output_name)) => {
            match converter::convert_file(file_name.clone(), output_name.clone()) {
                Ok(()) => {
                    // Read the converted file and return it in the response
                    let mut file = File::open(output_name.clone()).expect("Failed to open converted file");
                    let mut contents = Vec::new();
                    file.read_to_end(&mut contents).expect("Failed to read converted file");

                    HttpResponse::Ok()
                        .header("Content-Disposition", format!("attachment; filename=\"{}\"", output_name))
                        .content_type("application/octet-stream")
                        .body(contents)
                },
                Err(e) => HttpResponse::InternalServerError().body(format!("File uploaded but conversion failed: {}", e)),
            }
        },
        Err(e) => HttpResponse::InternalServerError().body(format!("File upload failed: {}", e)),
    }
    //fs::remove_file(output_name)?;

}
