/* let sayilar = [];
for (let i = 99; i > 9; i--) {
  sayilar.push(i);
} */

const kontrolIslemi = (sayi) => {
  if (isNumPrime(sayi) == true) {
    return sayi;
  }
};

const isNumPrime = (sayi) => {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      return false;
    }
  }
  return true;
};

const main = () => {
  console.log(kontrolIslemi(10));
};

main();
