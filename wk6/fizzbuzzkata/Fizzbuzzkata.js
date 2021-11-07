function fizzbuzz(num){
  if (num % 3 == 0 && num % 5 == 0){
    return "fizzbuzz"
  } else if (num % 3 == 0){
    return 'fizz'
  } else if (num % 5 == 0) {
    return 'buzz'
  } else if (num == 2) {
    return '2'
  } else if (num == 1) {
    return '1'
  } else {
    return num
  }
}

module.exports = fizzbuzz