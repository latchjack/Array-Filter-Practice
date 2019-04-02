var mixture = ['a', '1', 'b', '2', 'c', '3'];

const divided = mixture.filter(function(word) {
  return word.length > 0;
});

var rumble = mixture.filter(function(number) {
  return number > 0;
});

console.log(divided);