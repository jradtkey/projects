// function zero_negativity(arr) {
//
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       return false;
//     }
//   }
//
//   return true
//
// }
//
// console.log(zero_negativity([1,2,-3]));

function is_even(num) {
  if (num % 2 === 0) {
    return true
  }
  else {
    return false
  }
}

console.log(is_even(2));

function how_many_even(arr) {
  var count;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count += 1;
    }
  }
  return count;
}

return (console.log(how_many_even([1,2,4,5,6])))
