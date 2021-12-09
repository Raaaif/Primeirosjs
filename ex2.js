const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual sua idade? ", function (age) {
  if (age < 18) {
    rl.question("Autorizacao dos pais? ", function (pais) {
      return console.log(`Voce tem ${age} anos, autorizacao: ${pais}`);
    });
  } else {
    return console.log(`Voce tem ${age} anos`);
  }
});
