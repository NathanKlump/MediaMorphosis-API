use actix_web::{web, App, HttpServer};
use actix_cors::Cors;
use http::header;
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};

mod routes;
mod utils;
mod converter;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let mut builder = SslAcceptor::mozilla_intermediate(SslMethod::tls()).unwrap();
    builder
        .set_private_key_file("nopass.pem", SslFiletype::PEM)
        .unwrap();
    builder.set_certificate_chain_file("certificate.pem").unwrap();

    HttpServer::new(|| {
        let cors = Cors::default()
            .allowed_origin_fn(|_origin, _req_head| true)
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![header::AUTHORIZATION, header::ACCEPT])
            .allowed_header(header::CONTENT_TYPE)
            .max_age(3600);

        App::new()
            .wrap(cors)
            .route("/upload", web::post().to(routes::upload_file))
    })
    .bind_openssl("0.0.0.0:8080", builder)?
    .run()
    .await
}
