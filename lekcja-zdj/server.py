from http.server import SimpleHTTPRequestHandler, HTTPServer


class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        # Add headers that tell browsers not to cache content
        self.send_header(
            "Cache-Control", "no-store, no-cache, must-revalidate, max-age=0"
        )
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    server_address: tuple[str, int] = ("0.0.0.0", 8000)
    httpd = HTTPServer(server_address, NoCacheHTTPRequestHandler)
    print("Serving on port 8000 with no-cache headers")
    httpd.serve_forever()
