def convert(s):
    '''Convert a string to an integer.'''
    try:
        return int(s)
    except (ValueError, TypeError):
        return -1
