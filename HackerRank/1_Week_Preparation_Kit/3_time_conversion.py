import math
import os
import random
import re
import sys
from textwrap import wrap

def timeConversion(s):
  # split_hours_minutes = s.split(":")
  # split_seconds_am_pm = wrap(split_hours_minutes[2], 2)
  # if split_seconds_am_pm[1] == "AM":
  #   if split_hours_minutes[0] == "12":
  #     return "00:" + split_hours_minutes[1] + ":" + split_seconds_am_pm[0]
  #   else:
  #     return split_hours_minutes[0] + ":" + split_hours_minutes[1] + ":" + split_seconds_am_pm[0]
  # else:
  #   if split_hours_minutes[0] == "12":
  #     return split_hours_minutes[0] + split_hours_minutes[1] + ":" + split_seconds_am_pm[0]
  #   else:
  #     return str(int(split_hours_minutes[0]) + 12) + ":" + split_hours_minutes[1] + ":" + split_seconds_am_pm[0]
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
