const main = () => {
  const myFunction = (vizeNotu, finalNotu) => {
    if (vizeNotu * 0.4 + finalNotu * 0.6 >= 60) {
      console.log("gecti");
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
