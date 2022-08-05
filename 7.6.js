let hedefBoyDeclaration = function (anneBoyu, babaBoyu, cinsiyet) {
  let hedefBoyKiz = (anneBoyu + babaBoyu - 13) / 2;
  let hedefBoyErkek = (anneBoyu + babaBoyu + 13) / 2;
  if (cinsiyet == "k" && hedefBoyKiz < 163) {
    return (
      "Hedef boy" +
      " " +
      hedefBoyKiz +
      " " +
      " Türkiye ortalamasindan daha kisa olacak"
    );
  } else if (cinsiyet == "k" && hedefBoyKiz > 163) {
    return (
      "Hedef boy" +
      " " +
      hedefBoyKiz +
      " " +
      "Türkiye ortalamasindan daha uzun olacak"
    );
  } else if (cinsiyet == "k" && (hedefBoyKiz == 163 || hedefBoyKiz == 164)) {
    return (
      "Hedef boy" +
      " " +
      hedefBoyKiz +
      " " +
      "Türkiye ortalamasindan daha uzun olacak"
    );
  } else if (cinsiyet == "e" && hedefBoyErkek < 175) {
    return (
      "Hedef boy" +
      " " +
      hedefBoyErkek +
      " " +
      "Türkiye ortalamasindan daha kisa olacak"
    );
  } else if (cinsiyet == "e" && hedefBoyErkek > 176) {
    return (
      "Hedef boy" +
      " " +
      hedefBoyErkek +
      " " +
      "Türkiye ortalamasindan daha uzun olacak"
    );
  } else if (
    cinsiyet == "ke" &&
    (hedefBoyErkek == 175 || hedefBoyErkek == 176)
  ) {
    return (
      "Hedef boy" +
      " " +
      hedefBoyKiz +
      " " +
      "Türkiye ortalamasindan daha uzun olacak"
    );
  }
};
const main = () => {
  console.log(hedefBoyDeclaration(180, 170, "e"));
  console.log(hedefBoyDeclaration(150, 160, "k"));
};
main();
