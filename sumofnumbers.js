function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursionAux(list, i) {
  if (i < 0) {
    return 0;
  }
  return list[i] + sumRecursionAux(list, i - 1);
}

function sumRecursion(list) {
  return sumRecursionAux(list, list.length - 1);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (sum, val) => sum + val, 0);
}
const list = [1, 2, 3];
console.log(`list = ${list}`);
console.log(`sumFor(list) = ${sumFor(list)}`);
console.log(`sumWhile(list) = ${sumWhile(list)}`);
console.log(`sumRecursion(list) = ${sumRecursion(list)}`);
console.log(`sumTheSimpleWay(list) = ${sumTheSimpleWay(list)}`);
