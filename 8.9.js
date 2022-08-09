const getPosNegNums = (dizin) => {
  let posNums = [];
  let negNums = [];
  posNums = dizin.filter((item) => item > 0);
  negNums = dizin.filter((item) => item < 0);

  console.log(posNums);
  console.log(negNums);
};

const main = () => {
  const nums = [10, -7, 56, -90];
  getPosNegNums(nums);
};
main();
/*  for (let i = 0; i < dizin.length; i++) {
    const element = dizin[i];
    if (element > 0) {
      posNums.push(element);
    }
    if (element < 0) {
      negNums.push(element);
    }
  } */
