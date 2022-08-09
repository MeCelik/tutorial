const alanToplama = (a, n) => {
  let sonuc = 0;
  for (let i = 0; i < n; i++) {
    let alan = a * a;
    a = a / 2;

    sonuc = sonuc + alan;
  }
  return sonuc;
};

const main = () => {
  const a = 10;
  const n = 5;
  const sonuc = alanToplama(a, n);
  console.log(sonuc);
};
main();
