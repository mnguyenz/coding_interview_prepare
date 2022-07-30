import math
import os
import random
import re
import sys

def diagonalDifference(n, arr):
  first_diagonal = second_diagonal = 0
  for i in range(n):
    first_diagonal += arr[i][i]
    second_diagonal += arr[n - 1 - i][i]
  return abs(first_diagonal - second_diagonal)

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')
  n = int(input().strip())
  arr = []
  for _ in range(n):
    arr.append(list(map(int, input().rstrip().split())))
  result = diagonalDifference(n, arr)
  fptr.write(str(result) + '\n')
  fptr.close()