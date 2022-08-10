const getAsteriks = (sayi) => {
  let asteriksDizini = [];
  for (let i = 0; i < sayi; i++) {
    asteriksDizini.push(i);
    asteriksDizini[i] = "*";
  }
  console.log(asteriksDizini);
};

const main = () => {
  let verilenSayi1 = 5;
  let verilenSayi2 = 10;

  getAsteriks(verilenSayi1);
  getAsteriks(verilenSayi2);
};
main();
