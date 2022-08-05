function ortalamaPuan(araSinav, sonSinav, devamSinav) {
  if (araSinav * 0.4 + sonSinav * 0.5 + devamSinav * 0.1 >= 60) {
    return "gecti";
  } else {
    return "kaldi";
  }
}

const main = () => {
  console.log(ortalamaPuan(60, 70, 50));
};
main();
