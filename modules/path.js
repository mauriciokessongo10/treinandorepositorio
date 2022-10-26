const path = require('path');

//basename ou nome do arquivo
console.log(path.basename(__filename));

//diretorio
console.log(path.dirname(__filename));

//extensao do arquivo
console.log(path.extname(__filename));

//criando um objeto path, ou um path pr+oprio do nosso arquivo
console.log(path.parse(__filename));

//juntar caminhos de arquivos

console.log(path.join(__dirname, "testes", "testar.html"));
