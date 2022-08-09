const isNumPrime = (sayi) => {
  for (let i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      return false;
    }
  }
  return true;
};

const main = () => {
  /*  console.log(isNumPrime(17)); */
  let element = 0;
  for (let i = 1; i < 21; i++) {
    if (isNumPrime(i)) {
      console.log("15 satir", i);
    }
  }
};
main();
