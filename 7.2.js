function siralamaGiris(ales, yDil, mezuniyet) {
  if (ales * 0.5 + yDil * 0.25 + mezuniyet * 0.25 >= 60) {
    return "siralamaya girebilir";
  } else {
    return "siralamaya giremez";
  }
}

const main = () => {
  console.log(siralamaGiris(40, 70, 50));
};
main();
