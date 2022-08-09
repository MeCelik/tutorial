const usAl = (number, power) => {
  let sonuc = 1;
  for (let i = 1; i <= power; i++) {
    sonuc = sonuc * number;
  }
  return sonuc;
};

const calculate = (n, x) => {
  let sonuc = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sonuc = sonuc + usAl(x, i) / i;
    } else {
      sonuc = sonuc - usAl(x, i) / i;
    }
  }
  return sonuc;
};

const main = () => {
  const n = 3;
  const x = 4;
  const finalResult = calculate(n, x);
  console.log(finalResult);
};
main();
