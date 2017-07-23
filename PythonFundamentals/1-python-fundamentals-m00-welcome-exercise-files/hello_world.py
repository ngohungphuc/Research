import sys

def hello(who):
	print('hello {}'.format(who))

hello(sys.argv[1])