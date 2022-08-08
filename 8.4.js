let sayiDizini = [0, 1, 4, 6, 7, 11, 25, 32, 65, 78];
let tekSayilar = [];
const getTekSayilar = sayiDizini.filter((item) => {
  if (item % 2 === 1) {
    tekSayilar.push(item);
  }
});
let count = 0;
for (let i = tekSayilar.length - 1; i > -1; i = i - 1) {
  count += tekSayilar[i];
}
const cevap =
  "Girilen" +
  " " +
  tekSayilar.length +
  " " +
  "sayinin aritmetik ortalamasi" +
  " " +
  count / tekSayilar.length;
console.log(cevap);

const main = () => {};
main();
