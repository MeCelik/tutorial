const indexBulan = (dizin, deger) => {
  console.log("dizin ====>", dizin); // [5,10,15,20]
  console.log("deger ====>", deger); // 20
  let bulunanIndex = false;
  // lenght => 4
  for (let i = 0; i < dizin.length; i++) {
    // i => 3
    const element = dizin[i];
    // element => 20
    //  deger => 20
    if (element === deger) {
      bulunanIndex = i;
      // bulunanIndex => 0
      break;
    }
  }
  return bulunanIndex;
};
//
//

const sayiTekYazdir = (dizin) => {
  let tekSeferlikDizin = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];

    if (indexBulan(tekSeferlikDizin, element) == false)
      tekSeferlikDizin.push(element);
  }
};
console.log(tekSeferlikDizin);

const main = () => {
  let sayiDizini = [5, 10, 15, 10, 10, 5, 20, 20];
  sayiTekYazdir(sayiDizini);
};
main();
