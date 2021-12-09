const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qual sua idade? ", function (age) {
  if (age < 18) {
    rl.question("Autorizacao dos pais? ", function (pais) {
      if (pais != "sim")
        return console.log(
          `Voce tem menos de 18 anos e não tem autorização meu brow! Espera um pouquinho, jaja cê chega la! <3`
        );
      else if ((pais = "sim"))
        rl.question("Qual seu país? ", function (país) {
          return console.log(
            `Sua idade é ${age} e seu país de moradia é ${país} `
          );
        });
    });
  } else if (age >= 18) {
    rl.question("Qual seu país? ", function (país) {
      rl.question("Qual sua altura? ", function (altura) {
        return console.log(
          `Sua idade é ${age}anos, seu país de moradia é ${país} e sua altura é ${altura} centímetros.`
        );
      });
    });
  }
});
