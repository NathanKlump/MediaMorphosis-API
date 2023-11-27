// This module would contain the logic for media file conversion. 
//It would handle the actual process of taking a media file in one format and converting it to another format.

use std::process::Command;
use std::fs;

pub fn convert_file(input_file: String, output_file: &str) -> std::io::Result<()> {
    Command::new("ffmpeg")
        .arg("-i")
        .arg(&input_file)
        .arg(output_file)
        .status()?;

    fs::remove_file(input_file)?;
    
    Ok(())
}