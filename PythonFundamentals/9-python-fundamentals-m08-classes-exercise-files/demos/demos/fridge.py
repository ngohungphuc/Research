'''Demonstrate raiding a refrigerator.'''

from contextlib import closing

class RefridgeratorRaider:
    '''Raid a refrigerator'''

    def open(self):
        print("Open fridge door.")

    def take(self, food):
        print("Finding {}...".format(food))
        if food == 'deep fried pizza':
            raise RuntimeError("Health warning!")
        print("Taking {}".format(food))

    def close(self):
        print("Close fridge door.")

def raid(food):
    with closing(RefridgeratorRaider()) as r:
        r.open()
        r.take(food)
        r.close()
