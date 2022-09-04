const searchClosest = (value, array) => {
  let closest = array[0];
  array.forEach((el) => {
    if (Math.abs(value - el) < Math.abs(value - closest)) {
      closest = el;
    }
    if (Math.abs(value - el) == Math.abs(value - closest)) {
      closest = el > closest ? el : closest;
    }
  });
  return closest;
};

console.log(searchClosest(4.5, [-1.5, 0, 4.4, 5, 6, 7])); // 4.4
console.log(searchClosest(5.5, [-1.5, 0, 4.4, 5, 6, 7])); // 6
console.log(searchClosest(3, [-1.5, 0, 6, 5, 6, 7])); // 5
console.log(searchClosest(3, [-1.5, 6, 0])); // 6
