function myFunction(num1, num2, cb) {
  let sonuc = num1 + num2;
  cb(sonuc);
}
function myFunctiontwo(sonuc) {
  return sonuc;
}

const main = () => {
  console.log(myFunction(19, 10, myFunctiontwo));
};
main();
