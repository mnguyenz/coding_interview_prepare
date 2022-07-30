import math
import os
import random
import re
import sys

def miniMaxSum(arr):
  max = sum = 0
  min = math.inf
  for i in arr:
    sum += i
    if i > max:
      max = i
    if i < min:
      min = i
  print(str(sum - max) + " " + str(sum - min))

if __name__ == '__main__':
  arr = list(map(int, input().rstrip().split()))
  miniMaxSum(arr)
