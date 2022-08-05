const main = () => {
  let sayi = 12345678;
  const simetrikSayi = (sayi) => {
    let yuzbin = parseInt(sayi / 100000);
    let onbin = parseInt((sayi % 100000) / 10000);
    let bin = parseInt((sayi % 10000) / 1000);
    let yuz = parseInt((sayi % 1000) / 100);
    let on = parseInt((sayi % 100) / 10);
    let bir = parseInt(sayi % 10);
    let hesap = "" + bir + on + yuz + bin + onbin + yuzbin;
    return hesap;
  };

  console.log(simetrikSayi(sayi));
};
main();
