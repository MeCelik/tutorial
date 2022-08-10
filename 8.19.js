const ucretHesaplama = (dizin) => {
  let toplanacaklarDizini = [];
  let tutar = 0;
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element > 0 && element < 11) {
      tutar = 1;
      toplanacaklarDizini.push(tutar);
    } else if (element > 10 && element < 18) {
      tutar = 1.5;
      toplanacaklarDizini.push(tutar);
    } else if (element > 17 && element < 27) {
      tutar = 4.75;
      toplanacaklarDizini.push(tutar);
    } else if (element > 26 && element < 51) {
      tutar = 7;
      toplanacaklarDizini.push(tutar);
    } else if (element > 50) {
      tutar = 5.25;
      toplanacaklarDizini.push(tutar);
    } else {
      tutar = "Hatali yas araligi";
    }
  }

  let sum = toplanacaklarDizini.reduce((pv, cv) => pv + cv, 0);
  console.log(sum);
};

const main = () => {
  let yaslar = [2, 15, 25];
  ucretHesaplama(yaslar);
};
main();
