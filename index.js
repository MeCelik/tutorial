const islem = (kucuk, buyuk) => {
  let bosDizin = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 2 === 0) {
      bosDizin.push(i);
    }
    return bosDizin;
  }
};

const islemUpdate = (kucuk, buyuk) => {
  let bosDizin = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 2 === 0) {
      bosDizin.push(i);
    }
  }
  return bosDizin;
};

const ciftleriBul = (kucuk, buyuk) => {
  const ciftler = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 2 === 0) {
      ciftler.push(i);
    }
  }
  return ciftler;
};

const main = () => {
  let sayilar = [5, 20];
  const birinciSayi = 5;
  const ikinciSayi = 20;
  const ciftSayilar = ciftleriBul(birinciSayi, ikinciSayi);
  console.log(
    "Sayilar => ",
    ciftSayilar,
    "(Toplam ",
    ciftSayilar.length,
    " adet)"
  );
  console.log(islemUpdate(birinciSayi, ikinciSayi));
  console.log(islem(sayilar));
};
main();
