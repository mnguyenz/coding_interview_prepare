import math
import os
import random
import re
import sys

def plusMinus(arr):
  pos = neg = zero = size = 0 
  for i in arr:
    size += 1
    if i < 0:
      neg += 1
    elif i == 0:
      zero += 1
    else:
      pos += 1
  print('{:.6f}'.format(round(pos / size, 6)))
  print('{:.6f}'.format(round(neg / size, 6)))
  print('{:.6f}'.format(round(zero / size, 6)))

if __name__ == '__main__':
  n = int(input().strip())
  arr = list(map(int, input().rstrip().split()))
  plusMinus(arr)