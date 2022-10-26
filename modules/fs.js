const fs = require("fs");
const path = require("path");

//criar uma pasta

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }
//   console.log("Pasta Criada com Sucesso!");
// });

// criando um arquivo

fs.writeFile(
  path.join(__dirname, "/test", "text.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("Arquivo criado com Sucesso!");

    //adicionar a um arquivo depois de criar o arquivo e escrever nele
    fs.appendFile(path.join(__dirname, "/test", "text.txt"),
"E aí mano you good",
(error) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log("Arquivo modificado com Sucesso!");
})

//lendo aruivo já modificado

fs.readFile(path.join(__dirname, "/test", "text.txt"),
"utf8",
(error, data) => {
  if (error) {
    return console.log("Error: ", error);
  }
  console.log(data);
})









  }
);







