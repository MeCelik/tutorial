const cinsiyet = "kadin";
const boy = 170;
const kilo = 60;
switch (cinsiyet) {
  case "erkek":
    let idealKiloErkekSonuc = ((boy - 150) / 2.5) * 2.7 + 45;

    if (kilo > idealKiloErkekSonuc) {
      console.log(
        "Ideal kilonuz" +
          " " +
          idealKiloErkekSonuc +
          " " +
          "Ideal kilonuzdan daha agirsiniz"
      );
    } else if (kilo < idealKiloErkekSonuc) {
      console.log(
        "Ideal kilonuz" +
          " " +
          idealKiloErkekSonuc +
          " " +
          "Ideal kilonuzdan daha hafifsiniz"
      );
    } else if (kilo == idealKiloErkekSonuc) {
      console.log("Ideal kilonuzdasiniz");
    }
    break;
  case "kadin":
    let idealKiloKadinSonuc = ((boy - 150) / 2.5) * 2.2 + 45;

    if (kilo > idealKiloKadinSonuc) {
      console.log(
        "Ideal kilonuz" +
          " " +
          idealKiloKadinSonuc +
          " " +
          "Ideal kilonuzdan daha agirsiniz"
      );
    } else if (kilo < idealKiloKadinSonuc) {
      console.log(
        "Ideal kilonuz" +
          " " +
          idealKiloKadinSonuc +
          " " +
          "Ideal kilonuzdan daha hafifsiniz"
      );
    } else if (kilo == idealKiloKadinSonuc) {
      console.log("Ideal kilonuzdasiniz");
    }
    break;
  default:
    console.log("cinsiyet bilgisi hatalidir");
}
const main = () => {};
main();
