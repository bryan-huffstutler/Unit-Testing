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
