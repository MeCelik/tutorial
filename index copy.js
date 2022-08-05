const sayiTekYazdir = (dizin) => {
  let tekSeferlikDizin = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    dizin[i] !== i++;
    tekSeferlikDizin.push(element);
  }
  console.log(tekSeferlikDizin);
};

const main = () => {
  let sayiDizini = [5, 10, 14, 14, 20, 21, 23, 20];
  sayiTekYazdir(sayiDizini);
};
main();
