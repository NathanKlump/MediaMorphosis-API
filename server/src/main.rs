use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
use http::header;

mod routes;
mod utils;
mod converter;


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin_fn(|_origin, _req_head| true) // Allow all origins
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
            .allowed_header(header::CONTENT_TYPE)
            .max_age(3600);
        
        App::new()
            .wrap(cors)
            .route("/upload", web::post().to(routes::upload_file))
    })
    .bind("0.0.0.0:8080")?
    .run()
    .await
}
