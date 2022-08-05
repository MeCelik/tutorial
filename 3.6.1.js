function kriptolama(sayi) {
  let binler = parseInt(sayi / 1000);
  let yuzler = parseInt((sayi % 1000) / 100);
  let onlar = parseInt((sayi % 100) / 10);
  let birler = parseInt(sayi % 10);

  let kriptoluonlar = ((binler + 7) % 10) * 10;
  let kriptolubirler = (yuzler + 7) % 10;
  let kriptolubinler = ((onlar + 7) % 10) * 1000;
  let kriptoluyuzler = ((birler + 7) % 10) * 100;

  let kriptolusayi =
    kriptolubinler + kriptoluyuzler + kriptoluonlar + kriptolubirler;
  return kriptolusayi;
}

const main = () => {
  console.log(kriptolama(1572));
};
main();
