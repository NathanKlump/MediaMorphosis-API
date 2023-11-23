//Here you define the different routes (endpoints) your API will have. 
//Each route will be associated with a function that executes when the route is accessed. 
//This includes your media file upload and conversion endpoint.

use actix_web::{web, HttpResponse};
use crate::utils;

pub async fn upload_file(mut payload: web::Payload) -> HttpResponse {
    match utils::handle_file_upload(&mut payload).await {
        Ok(_) => HttpResponse::Ok().body("File uploaded successfully"),
        Err(e) => HttpResponse::InternalServerError().body(e.to_string()),
    }
}
