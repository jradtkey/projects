function magic_multiply(x, y){

  if ((x === 5 && y === 2) || (x === 2 && y == 5)){
    return x*y;
  }

  if (x || y === 0) {
    return 0;
  }

  if (x.constructor === Array) {
    for (let i = 0; i < x.length; i++) {
      x[i] = x[i] * y
    }
    return x;
  }

}


// let test1 = magic_multiply(5,2);
// console.log(test1);
// let test2 = magic_multiply(0,0);
// console.log(test2);
const test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
