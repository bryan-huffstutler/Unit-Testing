import pytest
from lib.fizzbuzz import fizzbuzz

def test_fizzbuzz():
  fizz = fizzbuzz(15)
  assert fizz == 'fizzBuzz'

def test_fizzbuzz_two():
  fizz = fizzbuzz(2)
  assert fizz == '2'

def test_fizzbuzz_one():
  fizz = fizzbuzz(1)
  assert fizz == '1'

def test_fizzbuzz_three():
  fizz = fizzbuzz(3)
  assert fizz == 'fizz'

def test_fizzbuzz_five():
  fizz = fizzbuzz(5)
  assert fizz == 'buzz'

def test_fizzbuzz_six():
  fizz = fizzbuzz(6)
  assert fizz == 'fizz'

def test_fizzbuzz_ten():
  fizz = fizzbuzz(10)
  assert fizz == 'buzz'
