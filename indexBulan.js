// bir tane array alacam
// bir tane değer alacam
// aldığım değer arrayin kaçıncı indexinde onu bulacam

const indexBulan = (dizin, deger) => {
  let bulunanIndex = "Bulunamadı";
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element === deger) {
      bulunanIndex = i;
      break;
    }
  }
  return bulunanIndex;
};

const main = () => {
  let benimDizinim = [1, 5, 2, 7, 9, 3, 6];
  let aranacakSayi = 51;
  const arananSayiIndexi = indexBulan(benimDizinim, aranacakSayi);
  console.log("Aranan Sayi => ", aranacakSayi);
  console.log("Sayinin Bulunduğu index => ", arananSayiIndexi);
};
main();
