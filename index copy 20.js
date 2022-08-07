const buyKucSiralama = (dizin, deger) => {
  let bulunanSayi = 0;
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (deger > element) {
      bulunanSayi = sonaekle;
    } else if (element > deger) {
      bulunanSayi = basaekle;
    }
  }
};

const sayiTekYazdir = (dizin) => {
  let sonaekle;
  let tekSeferlikDizin = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (buyKucSiralama(tekSeferlikDizin, element) == sonaekle)
      tekSeferlikDizin.push(element);
    else if (buyKucSiralama(tekSeferlikDizin, element) == basaekle)
      tekSeferlikDizin.unshift(element);
  }
  console.log(tekSeferlikDizin);
};

const main = () => {
  let degerler = [3.5, 4.7, 2.8];
  sayiTekYazdir(degerler);
};
main();
