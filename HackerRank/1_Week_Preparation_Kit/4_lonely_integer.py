import math
import os
import random
import re
import sys

def lonelyinteger(a):
  lonely = []
  for i in a:
    if i not in lonely:
      lonely.append(i)
    else:
      lonely.remove(i)
  return lonely[0]

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')
  n = int(input().strip())
  a = list(map(int, input().rstrip().split()))
  result = lonelyinteger(a)
  fptr.write(str(result) + '\n')
  fptr.close()
