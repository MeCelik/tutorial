function Rakamlarsum(sayi) {
  let binler = parseInt(sayi / 1000);
  let yuzler = parseInt((sayi % 1000) / 100);
  let onlar = parseInt((sayi % 100) / 10);
  let birler = parseInt(sayi % 10);
  let sonuc = binler + yuzler + onlar + birler;
  return sonuc;
}

const main = () => {
  console.log(Rakamlarsum(1234));
};
main();
