const muzYeme = (sayi) => {
  let sonuc = 0;
  for (let i = 1; i <= sayi; i++) {
    if (i < 6) {
      sonuc = sonuc + i;
      console.log(sonuc);
    }
    if (i >= 6) {
      sonuc = sonuc + parseInt((sonuc - i) / 2 + 1);
      console.log("10 satir", sonuc); /*   */
    }
  }
};

const main = () => {
  muzYeme(7);
};
main();
