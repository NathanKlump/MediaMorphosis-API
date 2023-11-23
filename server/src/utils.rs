//This file could include various utility functions that might be used across your 
//application, like error handling utilities, file processing functions, etc.

use actix_web::{web, Error};
use futures::StreamExt;
use std::io::Write;
use uuid::Uuid;

pub async fn handle_file_upload(payload: &mut web::Payload) -> Result<(), Error> {
    let uuid_v4 = Uuid::new_v4();
    let uuid_string = uuid_v4.to_string();
    
    while let Some(chunk) = payload.next().await {
        let data = chunk?;
        // Process chunks here; for example, write them to a file
        let mut file = web::block(|| std::fs::File::create(&uuid_string)).await??;
        file.write_all(&data)?;
    }
    Ok(())
}
