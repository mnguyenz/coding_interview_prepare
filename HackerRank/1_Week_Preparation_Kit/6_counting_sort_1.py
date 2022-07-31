import math
import os
import random
import re
import sys

def countingSort(n, arr):
  res = [0] * 100
  for i in range(n):
    res[arr[i]] += 1
  return res

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')
  n = int(input().strip())
  arr = list(map(int, input().rstrip().split()))
  result = countingSort(n, arr)
  fptr.write(' '.join(map(str, result)))
  fptr.write('\n')
  fptr.close()
  # n = int(input().strip())
  # arr = list(map(int, input().rstrip().split()))
  # result = countingSort(n, arr)
  # print(result)
