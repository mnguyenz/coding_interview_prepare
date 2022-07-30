import math
import os
import random
import re
import sys
from textwrap import wrap

def timeConversion(s):
  # splitHoursMinutes = s.split(":")
  # splitSecondsAmPm = wrap(splitHoursMinutes[2], 2)
  # if splitSecondsAmPm[1] == "AM":
  #   if splitHoursMinutes[0] == "12":
  #     return "00:" + splitHoursMinutes[1] + ":" + splitSecondsAmPm[0]
  #   else:
  #     return splitHoursMinutes[0] + ":" + splitHoursMinutes[1] + ":" + splitSecondsAmPm[0]
  # else:
  #   if splitHoursMinutes[0] == "12":
  #     return splitHoursMinutes[0] + splitHoursMinutes[1] + ":" + splitSecondsAmPm[0]
  #   else:
  #     return str(int(splitHoursMinutes[0]) + 12) + ":" + splitHoursMinutes[1] + ":" + splitSecondsAmPm[0]
  h = s[:2]
  amPm = s[-2:]
  msec = s[2:8]
  if amPm == "AM" and h == "12":
    h = "00"
  if amPm == "PM" and h != "12":
    h = str(int(h) + 12)
  return h + msec

if __name__ == '__main__':
  fptr = open(os.environ['OUTPUT_PATH'], 'w')
  s = input()
  result = timeConversion(s)
  fptr.write(result + '\n')
  fptr.close()
