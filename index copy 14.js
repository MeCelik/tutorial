const main = () => {
  let dizin = ["a", "b", "c", "c", "b", "h"];

  let tersHali = [];
  for (let i = dizin.length - 1; i > -1; i--) {
    const element = dizin[i];
    tersHali.push(element);
  }

  let ters = tersHali.join("");
  let duz = dizin.join("");
  if (ters == duz) {
    console.log("palindromdur");
  } else {
    console.log("palindrom degildir");
  }
};
main();
