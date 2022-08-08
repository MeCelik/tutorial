const islem = (kucuk, buyuk) => {
  let bosDizin = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 2 === 0) {
      bosDizin.push(i);
    }
    return bosDizin;
  }
};

const main = () => {
  let sayilar = [5, 20];
  console.log(islem(sayilar));
};
main();
