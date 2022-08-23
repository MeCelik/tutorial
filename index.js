const push = (origin, node) => {
  let pointer = origin;
  while (pointer.next !== null) {
    pointer = pointer.next;
  }
  pointer.next = node;
  return origin;
};

const main = () => {
  let base = {
    data: 10,
    next: null,
  };
  let birinci = {
    data: 20,
    next: null,
  };
  let ikinci = {
    data: 30,
    next: null,
  };
  //
  const result = push(base, birinci);
  const result1 = push(base, ikinci);
  console.log(result);
  console.log(result1);
  //
};

main();
