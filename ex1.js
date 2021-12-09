var frutas = ["Maçã", "Banana"];
var x = [
  { value: "x", id: 0 },
  { value: "y", id: 1 },
  { value: "z", id: 1 },
];

frutas.forEach(function (item, indice) {
  //console.log(item, indice);
});

x.filter((element, i) => {
  console.log(element.id > 0 ? element : undefined);
});

x.map((element, i) => {
  console.log(element);
});
