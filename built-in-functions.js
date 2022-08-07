const musteriler = [
  {
    yas: 25,
    cinsiyet: "E",
    boy: 180,
    kilo: 80,
    email: "sample1.test@test.com",
  },
  {
    yas: 35,
    cinsiyet: "K",
    boy: 160,
    kilo: 60,
    email: "sample2.test@test.com",
  },
  {
    yas: 25,
    cinsiyet: "K",
    boy: 165,
    kilo: 65,
    email: "sample7.test@test.com",
  },
  {
    yas: 55,
    cinsiyet: "E",
    boy: 180,
    kilo: 75,
    email: "sample3.test@test.com",
  },
  {
    yas: 17,
    cinsiyet: "E",
    boy: 170,
    kilo: 80,
    email: "sample4.test@test.com",
  },
];

const main = () => {
  // console.log(musteriler);
  const kadinMusteriler = musteriler.filter((item) => {
    if (item.cinsiyet === "K") {
      return true;
    }
  });
  const emailList = kadinMusteriler.map((item) => {
    return item.email;
  });
  console.log(kadinMusteriler);
  console.log(emailList);
};
main();
