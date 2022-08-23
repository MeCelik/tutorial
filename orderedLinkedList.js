const push = (origin, nodeData) => {
  const node = {
    data: nodeData,
    next: null,
  };
  let pointer = origin;
  while (pointer.next !== null && pointer.next.data < nodeData) {
    pointer = pointer.next;
  }
  if (pointer.next === null) {
    pointer.next = node;
  } else {
    node.next = pointer.next;
    pointer.next = node;
  }
  return origin;
};

const print = (origin) => {
  let pointer = origin;
  while (pointer.next !== null) {
    console.log(pointer.data);
    pointer = pointer.next;
  }
};

const main = () => {
  let base = {
    data: 10,
    next: null,
  };
  //
  const datalar = [20, 50, 30, 40, 25];
  for (let i = 0; i < datalar.length; i++) {
    const element = datalar[i];
    push(base, element);
  }
  print(base);
  //
};

main();
