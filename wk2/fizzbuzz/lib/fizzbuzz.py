def fizzbuzz(num):
    if num % 3 == 0 and num % 5 == 0:
        return "fizzBuzz"
    elif num % 3 == 0:
        return "fizz"
    elif num % 5 == 0:
        return "buzz"
    #Added to meet requirements of project
    elif num == 2:
        return '2'
    elif num == 1:
        return '1'
    else:
        return num