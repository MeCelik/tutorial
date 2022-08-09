const getDortYediDivRem = (kucuk, buyuk) => {
  let bosDizinDort = [];
  let bosDizinYedi = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 4 === 0) {
      bosDizinDort.push(i);
    }
    if (i % 7 === 0) {
      bosDizinYedi.push(i);
    }
  }
  console.log(
    "girilen iki sayi arasinda 4`e bolunen sayilar" +
      " " +
      bosDizinDort +
      " " +
      "toplam" +
      " " +
      bosDizinDort.length +
      " " +
      "adet"
  );
  console.log(
    "girilen iki sayi arasinda 7`ye bolunen sayilar" +
      " " +
      bosDizinYedi +
      " " +
      "toplam" +
      " " +
      bosDizinYedi.length +
      " " +
      "adet"
  );
};

const main = () => {
  const birinciSayi = 4;
  const ikinciSayi = 20;
  getDortYediDivRem(birinciSayi, ikinciSayi);
};
main();
