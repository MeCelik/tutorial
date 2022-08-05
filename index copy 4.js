const mutlakDeger = (sayi) => {
  if (sayi > 0) {
    console.log(sayi);
  } else {
    console.log(sayi * -1);
  }
};

const main = () => {
  const degerler = [-10, 1, 24, -36, 70, -80];
  for (let i = 0; i < degerler.length; i++) {
    const mutlakSayi = degerler[i];
    mutlakDeger(mutlakSayi);
  }
};
main();
