const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const makePalindrome = (string) => {
  let steps = 0;
  let array = string.split("");
  for (let i = 0; i < array.length / 2; ++i) {
    if (array[i] != array[string.length - i - 1]) {
      let current = alphabet.findIndex(
        (el) => el === array[string.length - i - 1]
      );
      let target = alphabet.findIndex((el) => el === array[i]);
      steps += Math.abs(target - current);
    }
  }
  return steps;
};

console.log(makePalindrome("abc")); // 2
// The palindrome would be 'aba', so from 'abc' => 'abb' => 'aba'
console.log(makePalindrome("abcde")); // 6
// The palindrome would be 'abcba', so from 'abcde' => 'abcdd' => 'abcdc' => 'abcdb' => 'abcda' => 'abcca' => 'abcba'
console.log(makePalindrome("aaa")); // 0
// The palindrome would be 'aaa', zero steps, it already is a palindrome
console.log(makePalindrome("az")); // 25
// The palindrome would be 'aa', so from 'az' => 'ay' => ... => 'ab' => 'aa'
