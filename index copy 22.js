const hesapla = (n) => {
  let sonuc = 0;
  for (let i = 1; i <= n; i++) {
    sonuc = +(i + 1) / i;
  }
  return sonuc;
};

const main = () => {
  console.log(hesapla(16));
};
main();
