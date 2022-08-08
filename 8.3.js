const sayilar = (n) => {
  let ilkSayi = 64;
  let bosDizin = [];
  for (let i = 1; i < 21; i++) {
    let sonuc = ilkSayi + i;
    bosDizin.push(sonuc);
  }
  console.log(bosDizin);
  getCharCode(bosDizin);
};
const getCharCode = (dizin) => {
  let charCodeArrayBig = [];
  let charCodeArraySmall = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    let charCodedElementBig = String.fromCharCode(element);
    let charCodedElementSmall = String.fromCharCode(element + 32);
    charCodeArrayBig.push(charCodedElementBig);
    charCodeArraySmall.push(charCodedElementSmall);
  }
  console.log(charCodeArrayBig);
  console.log(charCodeArraySmall);
};

const main = () => {
  sayilar();
};
main();
