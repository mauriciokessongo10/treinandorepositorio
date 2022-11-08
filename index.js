//import { Person } from "./person"; another way to import object or class from one file to another

// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDataBase = require("./src/database/connect");
dotenv.config();

connectToDataBase();

// //require("./modules/path");
// // require("./modules/fs");
// // require('./modules/http');
// require("./modules/express"); //usar e rodar o express a partir de um arquivo separado, isso nos fala da modularização

// const person = new Person("Mauricio");

// // console.log(person.sayMyName());
