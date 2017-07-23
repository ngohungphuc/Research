"""Module for demonstrating files."""

import sys

def main(filename):
  f = open(filename, mode='rt', encoding='utf-8')
  for line in f:
      sys.stdout.write(line)
  f.close()

if __name__ == '__main__':
  main(sys.argv[1])
