const http = require("http");
const PORT = 4999;
const ip = "localhost";

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(200, defaultCorsHeader);
    response.end();
  }

  if (request.method === "POST" && request.url === "/upper") {
    let body = [];
    request
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        response.writeHead(200, defaultCorsHeader);
        response.end(body.toUpperCase());
      });
  } else if (request.method === "POST" && request.url === "/lower") {
    let body = [];
    request
      .on("data", function (data) {
        body.push(data);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        response.writeHead(200, defaultCorsHeader);
        response.end(body.toLowerCase());
      });
  } else {
    response.statusCode = 404;
    response.writeHead(404, defaultCorsHeader);
    response.end();
  }

  console.log(
    `http request method is ${request.method}, url is ${request.url}`
  );
  // response.writeHead(200, defaultCorsHeader);
  // response.end("hello mini-server sprints");
});

server.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});

const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
