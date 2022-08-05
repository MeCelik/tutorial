function kriptocozme(sayi) {
  let binler = parseInt(sayi / 1000);
  let yuzler = parseInt((sayi % 1000) / 100);
  let onlar = parseInt((sayi % 100) / 10);
  let birler = parseInt(sayi % 10);

  let kriptoluonlar = ((binler + 3) % 10) * 10;
  let kriptolubirler = (yuzler + 3) % 10;
  let kriptolubinler = ((onlar + 3) % 10) * 1000;
  let kriptoluyuzler = ((birler + 3) % 10) * 100;

  let kriptolusayi =
    kriptolubinler + kriptoluyuzler + kriptoluonlar + kriptolubirler;
  return kriptolusayi;
}

const main = () => {
  console.log(kriptocozme(4982));
};
main();
