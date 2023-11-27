//Here you define the different routes (endpoints) your API will have. 
//Each route will be associated with a function that executes when the route is accessed. 
//This includes your media file upload and conversion endpoint.

use actix_web::{web, HttpResponse};
use crate::utils;
use crate::converter;

pub async fn upload_file(mut payload: web::Payload) -> HttpResponse {

    let file_name = utils::handle_file_upload(&mut payload).await;

    match file_name {
        Ok(file_path) => {
            match converter::convert_file(file_path, "hello.mp4") {
                Ok(()) => HttpResponse::Ok().body("File uploaded and conversion successful"),
                Err(e) => HttpResponse::InternalServerError().body(format!("File uploaded but conversion failed: {}", e)),
            }
        }, 
        Err(e) => HttpResponse::InternalServerError().body(format!("File upload failed: {}", e)),
    }
}
