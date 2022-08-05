function vki(yas, boy, kilo) {
  let vucutKitleIndeksi = kilo / ((boy * boy) / 10000);
  if (
    yas >= 13 &&
    yas <= 18 &&
    vucutKitleIndeksi <= 24.99 &&
    vucutKitleIndeksi >= 18.5
  ) {
    return (
      "vücut kitle indeksiniz" +
      "<br />" +
      vucutKitleIndeksi +
      "<br />" +
      "tebrikler askeri liseye girebilirsiniz"
    );
  } else {
    return "failed";
  }
}

const main = () => {
  console.log(vki(15, 170, 60));
};
main();
