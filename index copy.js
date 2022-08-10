const hesapla = (sayi) => {
  return sayi == 8 ? 5 : 8;
};
const hesapla1 = (sayi) => {
  return 13 - sayi;
};
const hesapla2 = (sayi) => {
  return 40 / sayi;
};

const main = () => {
  const girilecekSayi = 5;
  const sonuc = hesapla(girilecekSayi);
  console.log(sonuc);
  const sonuc1 = hesapla1(girilecekSayi);
  console.log(sonuc1);
  const sonuc2 = hesapla2(girilecekSayi);
  console.log(sonuc2);
};

main();
