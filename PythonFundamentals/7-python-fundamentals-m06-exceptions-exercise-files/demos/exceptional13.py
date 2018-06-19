from math import log
import sys


def convert(s):
    '''Convert a string to an integer.'''
    try:
        return int(s)
    except (ValueError, TypeError) as e:
        print("Conversion error: {}".format(str(e)), file=sys.stderr)
        raise


def string_log(s):
    v = convert(s)
    return log(v)
