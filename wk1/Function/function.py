def perfectNumber() :
  # Get Number From User
  n = int(input("Enter any number: "))

  # Setup Empty Variable
  sum1 = 0

  # For Loop to Check Numbers
  # This for in range checks all numbers between 1 and n
  for i in range(1, n):
    # Checks if n modulus i = 0 or not, To see if it's divisible or not
      if(n % i == 0):
        # Adds i to sum1 until sum1 == n
          sum1 = sum1 + i
  # After for loop completes, if sum1 == n, then the number is perfect
  if (sum1 == n):
      print("The number is a Perfect number!")
  # Otherwise it is not.
  else:
      print("The number is not a Perfect number!")

perfectNumber()