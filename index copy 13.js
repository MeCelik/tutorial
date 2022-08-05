
const simetrik = (karakterDizini) => {
  console.log(karakterDizini);
};
const main = () => {
  const dizin = ["a", "b", "c", "d", "c", "b", "a"];
  simetrik(dizin);
};
main();
oğuzhan atasever18:12
const simetrik = (karakterDizini) => {
  let tersHali = [];
  for (let i = karakterDizini.length - 1; i > -1; i--) {
    const element = karakterDizini[i];
    tersHali.push(element);
  }
  console.log(tersHali.join("") == karakterDizini.join(""));
};
// abcdcba === abcdcba
const main = () => {
  const dizin = ["a", "b", "c", "d", "c", "b", "a"];
  simetrik(dizin);
};
main();
oğuzhan atasever18:14
const simetrik = (karakterDizini) => {
  let tersHali = [];
  for (let i = karakterDizini.length - 1; i > -1; i--) {
    const element = karakterDizini[i];
    tersHali.push(element);
  }
  return tersHali.join("") == karakterDizini.join("");
};
// abcdcba === abcdcba
const main = () => {
  const dizin = ["a", "b", "c", "d", "b", "b", "a"];
  const condition = simetrik(dizin);
  if (condition) {
    console.log("Bu dizin palindrom");
  } else {
    console.log("Bu dizin palindrom Degil");
  }
};
