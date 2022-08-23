const push = (origin, nodeData) => {
  const node = {
    data: nodeData,
    next: null,
  };
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
  //
  const datalar = [20, 50, 30, 50, 25];
  for (let i = 0; i < datalar.length; i++) {
    const element = datalar[i];
    push(base, element);
  }
  console.log(JSON.stringify(base));
  //
};

main();
