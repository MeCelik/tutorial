function puanGosterme(trafik, motor, ilkyardim) {
  let trafikNotu = "Trafik notunuz" + " : " + (50 - trafik) * 2;
  let motorNotu = "Motor notunuz" + " : " + (40 - motor) * 2.5;
  let ilkyardimNotu = "Ilk yardim notunuz" + " : " + (30 - ilkyardim) * 3.3;
  console.log(trafikNotu);
  console.log(motorNotu);
  console.log(ilkyardimNotu);
}

function siralamaGiris(trafik, motor, ilkyardim) {
  if (trafik > 15 && motor > 12 && ilkyardim > 9) {
    console.log("Üzgünüz direksiyon sinavina katilamazsiniz");
  }
}

const main = () => {
  puanGosterme(16, 13, 10), siralamaGiris(16, 13, 10);
};
main();
