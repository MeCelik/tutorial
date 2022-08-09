const halleyYildizi = () => {
  let gelecek20Tarih = [];
  let ikibinlerde = [];
  for (let i = 1986; i < 4000; i = i + 75) {
    if (i < 75 * 20 + 1986) {
      gelecek20Tarih.push(i);
    }
    if (i < 3000 && i > 1999) {
      ikibinlerde.push(i);
    }
  }

  console.log(
    "Halley yildizinin görülebilecegi yillar :" + " " + gelecek20Tarih
  );
  console.log(
    "Halley yildizi 2000´li yillarda" +
      " " +
      ikibinlerde.length +
      " " +
      "kez görülebilir"
  );
};

const main = () => {
  halleyYildizi();
};
main();
