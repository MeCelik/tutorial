const islemArtikYil = (kucuk, buyuk) => {
  let bosDizin = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 4 === 0) {
      bosDizin.push(i);
    }
  }
  console.log(bosDizin + " " + "toplam" + " " + bosDizin.length + " " + "adet");
};

const main = () => {
  const birinciSayi = 5;
  const ikinciSayi = 20;
  islemUpdate(birinciSayi, ikinciSayi);
};
main();
