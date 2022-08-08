let sayiDizini = [0, 1, 4, 6, 7, 11, 25, 32, 65, 78];
let tekSayilar = [];
const getTekSayilar = sayiDizini.filter((item) => {
  if (item % 2 === 1) {
    tekSayilar.push(item);
    console.log(tekSayilar);
  }
});
let count = 0;
for (let i = tekSayilar.length - 1; i > -1; i--) {
  count += tekSayilar[i];
  let bolmeSayisi = count;
}
let cevap =
  "Girilen" +
  tekSayilar.length +
  "sayinin aritmetik ortalamasi" +
  bolmeSayisi / tekSayilar.length;
console.log(cevap);

const main = () => {};
main();
