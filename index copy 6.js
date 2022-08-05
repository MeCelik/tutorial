const main = () => {
  const myFunction = (vizeNotu, finalNotu) => {
    let ortalamaDeger = vizeNotu * 0.4 + finalNotu * 0.6;

    if (ortalamaDeger >= 90) {
      console.log("aa");
    } else if (ortalamaDeger >= 80) {
      console.log("bb");
    } else if (ortalamaDeger >= 70) {
      console.log("cc");
    } else {
      console.log("kaldi");
    }
  };

  let vizeler = [50, 55, 60, 70, 85];
  let finaller = [60, 70, 80, 90, 95];
  for (let i = 0; i < vizeler.length; i++) {
    const vizenotu = vizeler[i];
    const finalnotu = finaller[i];
    myFunction(vizenotu, finalnotu);
  }
};
main();
