use actix_web::{web, App, HttpServer};
mod routes;
mod utils;
mod converter;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/upload", web::post().to(routes::upload_file))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
