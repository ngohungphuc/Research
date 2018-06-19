def convert(s):
    '''Convert a string to an integer.'''
    try:
        x = int(s)
    except ValueError:
        x = -1
    return x
