//import { Person } from "./person"; another way to import object or class from one file to another

const { Person } = require("./person");
//require("./modules/path");
// require("./modules/fs");
// require('./modules/http');
require("./modules/express");

const person = new Person("Mauricio");

// console.log(person.sayMyName());
