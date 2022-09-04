const doit = (a, b) => {
  return b == 0 ? a : doit(b, a % b);
};
console.log(doit(1071, 1029)); // 21

// This function searches for the greatest common divisor
// 1071 = 21 × 51
// 1029 = 21 × 49

// Can write other functions that use Euclid's algorithm :

const pgcd1 = (a, b) => {
  while (a != b) {
    a > b ? (a = a - b) : (b = b - a);
  }
  return a;
};
console.log(pgcd1(1071, 1029));

const pgcd2 = (a, b) => {
  while (b != 0) {
    const x = b;
    b = a % b;
    a = x;
  }
  return a;
};
console.log(pgcd1(1071, 1029));
