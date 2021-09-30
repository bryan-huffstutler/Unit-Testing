import pytest
from lib.helloworld import helloworld

# class test_helloWorld :
  
def test_helloWorld():
    hello = helloworld("Bryan")
    assert hello == 'Hello World my name is: Bryan'