const cinsiyet = 0;
const boy = 170;
const kilo = 70;
switch (cinsiyet) {
  case 0:
    function idealKiloErkek(boy) {
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
        return (
          "Ideal kilonuz" +
          " " +
          idealKiloErkekSonuc +
          " " +
          "Ideal kilonuzdan daha hafifsiniz"
        );
      } else if (kilo == idealKiloErkekSonuc) {
        return "Ideal kilonuzdasiniz";
      }
    }
    break;

  case 1:
    function idealKiloKadin(boy, kilo) {
      let idealKiloKadinSonuc = ((boy - 150) / 2.5) * 2.2 + 45;

      if (kilo > idealKiloKadinSonuc) {
        return (
          "Ideal kilonuz" +
          " " +
          idealKiloKadinSonuc +
          " " +
          "Ideal kilonuzdan daha agirsiniz"
        );
      } else if (kilo < idealKiloKadinSonuc) {
        return (
          "Ideal kilonuz" +
          " " +
          idealKiloKadinSonuc +
          " " +
          "Ideal kilonuzdan daha hafifsiniz"
        );
      } else if (kilo == idealKiloKadinSonuc) {
        return "Ideal kilonuzdasiniz";
      } else if (cinsiyet == "e") {
        return idealKiloErkek(boy);
      }

      let idealKiloErkek = function (boy) {
        let idealKiloErkekSonuc = ((boy - 150) / 2.5) * 2.7 + 45;

        if (kilo > idealKiloErkekSonuc) {
          return (
            "Ideal kilonuz" +
            " " +
            idealKiloErkekSonuc +
            " " +
            "Ideal kilonuzdan daha agirsiniz"
          );
        } else if (kilo < idealKiloErkekSonuc) {
          return (
            "Ideal kilonuz" +
            " " +
            idealKiloErkekSonuc +
            " " +
            "Ideal kilonuzdan daha hafifsiniz"
          );
        } else if (kilo == idealKiloErkekSonuc) {
          return "Ideal kilonuzdasiniz";
        }
      };
    }
    break;
  default:
    return "bulunamadi";
}
const main = () => {
  console.log((cinsiyet = 0));
};
main();
