const hesapla = (n) => {
  let sonuc = 0;
  for (let i = 1; i <= n; i++) {
    sonuc = sonuc + (i + 1) / i;
  }
  return sonuc;
};

const islem1 = (sayi) => {
  let bosDizin = [];
  if (sayi > 0) {
    sayi = sayi - 1;

    bosDizin.push(sayi);
    islem1(sayi);
  }
  let toplama = (item) => {
    let sum;
    sum += item;
    return sum;
  };
  bosDizin.forEach(toplama);
  console.log(bosDizin);
};

const main = () => {
  islem1(16);
  const sonuc = hesapla(16);
  console.log(sonuc);
};
main();
