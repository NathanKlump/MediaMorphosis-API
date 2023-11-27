//This file could include various utility functions that might be used across your 
//application, like error handling utilities, file processing functions, etc.

use actix_web::{web, Error};
use futures::StreamExt;
use infer;
use std::io::{Write};
use uuid::Uuid;

pub async fn handle_file_upload(payload: &mut web::Payload) -> Result<String, Error> {
    let uuid_v4 = Uuid::new_v4();
    let mut file_path = uuid_v4.to_string();
    
    let mut buffer = Vec::new();

    while let Some(chunk) = payload.next().await {
        let data = chunk?;
        buffer.extend_from_slice(&data);
    }

    if let Some(kind) = infer::get(&buffer) {
        file_path.push_str(".");
        file_path.push_str(kind.extension());
    }

    let file_path_clone = file_path.clone();
    let mut file = web::block(move || std::fs::File::create(&file_path)).await??;
    file.write_all(&buffer)?;

    Ok(file_path_clone)
}

