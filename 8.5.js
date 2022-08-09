const islem = (kucuk, buyuk) => {
  // İki tane parametre alıyor
  // consolda aldığın parametreleri yazdırmaya çalış kendi hatanı görürsün zaten
  // Satır 32te tek parametre gönderiyorsun aslında satır 37de benim yazdığımda iki tane gönderiyorum
  let bosDizin = [];
  for (let i = kucuk; i <= buyuk; i++) {
    // i => kucuk iken if çalışsın çalışmasın return ediyor
    // return for döngüsünün dışında olmalı
    // if ve for döngün çok güzel çalışıyor bir hatası yok sadece return forun dışında olmalı
    //  bu durumda mesela ilke değer 5 ve 6 olamadan direkt boş bir dizin gönderiyor
    if (i % 2 === 0) {
      bosDizin.push(i);
    }
    return bosDizin;
  }
};
//  Oguz function Start
// Senin yanlışları düzelttim sadece
const islemUpdate = (kucuk, buyuk) => {
  let bosDizin = [];
  for (let i = kucuk; i <= buyuk; i++) {
    if (i % 2 === 0) {
      bosDizin.push(i);
    }
  }
  return bosDizin;
};
//  Oguz function Start
const main = () => {
  let sayilar = [5, 20];

  console.log(islem(sayilar));

  //  Oguz Start
  const birinciSayi = 5;
  const ikinciSayi = 20;
  console.log(islemUpdate(birinciSayi, ikinciSayi));
  // Oguz End
};
main();
