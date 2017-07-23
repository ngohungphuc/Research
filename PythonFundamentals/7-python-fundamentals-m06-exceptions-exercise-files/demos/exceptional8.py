def convert(s):
    '''Convert a string to an integer.'''
    x = -1
    try:
        x = int(s)
    except (ValueError, TypeError):
        pass
    return x
