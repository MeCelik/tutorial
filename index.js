const getNegSayi = (dizin) => {
  if (dizin[i] < 0) {
    return dizin[i];
  }
};
let negSayiDizini = [];
const myFunction = (dizin) => {
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element < 0) {
      negSayiDizini.push(element);
    }
  }
  console.log(negSayiDizini);
};
const main = () => {
  let sayilar = [0, 10, -75, 17, 9, -62];
  myFunction(sayilar);
};
main();
