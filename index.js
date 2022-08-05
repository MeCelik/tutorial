const indexBulan = (dizin, deger) => {
  let bulunanIndex = false;
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element === deger) {
      bulunanIndex = i;
      break;
    }
  }
  return bulunanIndex;
};

const sayiTekYazdir = (dizin) => {
  let tekSeferlikDizin = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (indexBulan(element) == false) {
      tekSeferlikDizin.push(element);
    }
  }
  console.log(tekSeferlikDizin);
};

const main = () => {
  let sayiDizini = [5, 10, 14, 14, 20, 21, 23, 20];
  sayiTekYazdir(sayiDizini);
};
main();
