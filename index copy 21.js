const buyKucSiralama = (dizin, deger) => {
  let islemIzni = sonaEkle;
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (deger > element) {
      islemIzni = sonaEkle;
    } else if (deger < element) {
      islemIzni = basaEkle;
    }
  }
};
const sayiTekYazdir = (dizin) => {
  let tekSeferlikDizin = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];

    if (buyKucSiralama(tekSeferlikDizin, element) == sonaEkle) {
      tekSeferlikDizin.push(element);
    } else if (buyKucSiralama(tekSeferlikDizin, element) == basaEkle) {
      tekSeferlikDizin.unshift(element);
    }
  }
};

console.log(tekSeferlikDizin);

const main = () => {
  let sayiDizini = [5, 10, 15, 20];
  sayiTekYazdir(sayiDizini);
};
main();
