const getOjeSatisi = (dizin) => {
  let kirmizi = 0;
  let yesil = 0;
  let sari = 0;
  let siyah = 0;

  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element < 1 || (element > 4 && element < 111) || element > 111) {
      console.log("Hata, Lütfen gecerli bir kod giriniz");
      break;
    }
    if (element == 1) {
      kirmizi = kirmizi + 1;
    }
    if (element == 2) {
      yesil = yesil + 1;
    }
    if (element == 3) {
      sari = sari + 1;
    }
    if (element == 4) {
      siyah = siyah + 1;
    }
    if (element == 111) {
      console.log(
        "Kirmizi",
        kirmizi,
        ",",
        "yesil",
        yesil,
        ",",
        "sari",
        sari,
        ",",
        "siyah",
        siyah,
        "oje satilmistir"
      );
      break;
    }
  }
};

const main = () => {
  let satilanOjeler = [1, 3, 4, 2, 4, 1, 1, 4, 111];
  getOjeSatisi(satilanOjeler);
};
main();
