const express = require("express");

const app = express(); //inicializando o express com uma variável

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello Hello Hello</h1>");
});

app.get("/users", (req, res) => {
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

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () => console.log("Rodando com Express na porta " + port));
