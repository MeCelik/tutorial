const main = () => {
  const num1 = 20;
  const num2 = 3;
  const name = "Chamakh";

  function getScore() {
    const num1 = 2;
    const num2 = 3;

    function add() {
      return name + " scored " + (num1 + num2);
    }

    return add();
  }

  getScore();
};
main();
