//This file could include various utility functions that might be used across your 
//application, like error handling utilities, file processing functions, etc.

use actix_web::{web, Error};
use actix_multipart::Multipart;
use futures_util::StreamExt as _;
use uuid::Uuid;
use std::io::Write;

pub async fn handle_file_upload(mut payload: Multipart) -> Result<String, Error> {
    let uuid_v4 = Uuid::new_v4();
    let mut file_path = uuid_v4.to_string();
    let mut buffer = Vec::new();
    let mut output_file_value = String::new();

    while let Some(item) = payload.next().await {
        let mut field = item?;
        let field_name = field.content_disposition().get_name().unwrap_or("");

        if field_name == "file" {
            while let Some(chunk) = field.next().await {
                let data = chunk?;
                buffer.extend_from_slice(&data);
            }
        } else if field_name == "output_file" {
            while let Some(chunk) = field.next().await {
                let data = chunk?;
                output_file_value.push_str(std::str::from_utf8(&data).unwrap_or(""));
            }
        }
    }
    println!("the new var is: {}", output_file_value);

    if let Some(kind) = infer::get(&buffer) {
        file_path.push_str(".");
        file_path.push_str(kind.extension());
    }

    let file_path_clone = file_path.clone();
    let mut file = web::block(move || std::fs::File::create(&file_path)).await??;
    file.write_all(&buffer)?;

    // Optionally use output_file_value here
    // e.g., print it or save it along with file information

    Ok(file_path_clone)
}


