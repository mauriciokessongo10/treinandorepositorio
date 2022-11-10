const http = require("http");//modulo http

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "content-Type": "text/html" });
    res.end("<h1>This Page Is On </h1>");
    
  }
  if (req.url === "/users") {
    const users = [
      {
        name: "Mauro",
        email: "mauriciokessongo10@gmail.com",
      },
      {
        name: "Nelson",
        email: "nelson@hotmail.com",
      },
    ];
    res.writeHead(200, { "content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log("Rodando na porta " + port));
