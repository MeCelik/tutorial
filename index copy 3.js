const mutlakDeger = (sayi) => {
  if (sayi < 0) {
    console.log(sayi * -1);
  } else {
    console.log(sayi);
  }
};

const main = () => {
  mutlakDeger(10);
  let degerler = [-10, -1, 7, 15, -80, 70, -65];
  for (let i = 0; i < degerler.length; i++) {
    const deger = degerler[i];
    mutlakDeger(deger);
  }
};
main();
