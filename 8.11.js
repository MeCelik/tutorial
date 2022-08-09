const hesapla = (dizin) => {
  let tekBasamak = 0;
  let ikiBasamak = 0;

  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element > 99) {
      break;
    }
    if (element >= 0 && element <= 9) {
      tekBasamak = tekBasamak + 1;
    }
    if (element >= 10 && element <= 99) {
      ikiBasamak = ikiBasamak + 1;
    }
  }

  console.log("tek basamaklı sayilar ", tekBasamak, " tane");
  console.log("İki basamaklı sayilar ", ikiBasamak, " tane");
};

const main = () => {
  const girilenSayilar = [1, 41, 54, 76, 12, 2, 54, 100, 1234];
  hesapla(girilenSayilar);
};
main();
