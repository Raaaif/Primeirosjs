const { format } = require("date-fns");
var add = require("date-fns/add");

var idade = 19;

if (idade >= 18) {
  const result = add(new Date(), {
    days: 7,
    years: 8,
  });
} else {
  console.log("Menor de idade!");
}
