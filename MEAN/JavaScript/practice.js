var x = [];
console.log(x);
x.push("coding");
x.push("dojo");
x.push("rocks");
x.pop();
console.log(x);

const y = [];
console.log(y);
y.push(88)
console.log(y);

var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (var i = 0; i < z.length-1; i++) {
  console.log(z[i]);
}

function yell(string) {
  return string.toUpperCase();
}

console.log(yell("help"));
