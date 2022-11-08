const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    "mongodb+srv://" +
      process.env.MONGODB_USERNAME +
      ":" +
      process.env.MONGODB_PASSWORD +
      "@mauriciodatabase.hq2pxjy.mongodb.net/?retryWrites=true&w=majority",
    (error) => {
      if (error) {
        return console.log(
          "ocorreu um erro ao se connectar com o banco de dados : ",
          error
        );
      }
      return console.log("conexão ao banco de dados realizada com sucesso");
    }
  );
};
module.exports = connectToDataBase;
