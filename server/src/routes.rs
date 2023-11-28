//Here you define the different routes (endpoints) your API will have. 
//Each route will be associated with a function that executes when the route is accessed. 
//This includes your media file upload and conversion endpoint.

use actix_multipart::Multipart;
use actix_web::HttpResponse;
use crate::utils;
use crate::converter;

pub async fn upload_file(payload: Multipart) -> HttpResponse {
    let result = utils::handle_file_upload(payload).await;

    match result {
        Ok((file_name, output_name)) => {
            match converter::convert_file(file_name, output_name) {
                Ok(()) => HttpResponse::Ok().body("File uploaded and conversion successful"),
                Err(e) => HttpResponse::InternalServerError().body(format!("File uploaded but conversion failed: {}", e)),
            }
        },
        Err(e) => HttpResponse::InternalServerError().body(format!("File upload failed: {}", e)),
    }
}
