const hexaDecimal = (dizin) => {
  let base16Array = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    let stringedNumber = element.toString(16);
    base16Array.push(stringedNumber);
  }
};
const octal = (dizin) => {
  let base8Array = [];
  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    let stringedNumber = element.toString(8);
    base8Array.push(stringedNumber);
  }
};
const main = () => {
  let sayiDizini = [1, 5, 10, 12, 17, 25];
  console.log(hexaDecimal(sayiDizini));
  console.log(octal(sayiDizini));
};
main();
