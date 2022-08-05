function myFunction(num1, num2) {
  let sonuc = num1 + num2;
  myFunctiontwo(sonuc);
}
function myFunctiontwo(sonuc) {
  return sonuc;
}

const main = () => {
  console.log(myFunction(19, 10));
};
main();
