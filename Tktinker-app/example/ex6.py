from tkinter import *

root = Tk()


def printName():
    print('hello')


button_1 = Button(root, text='Click', command=printName)
button_1.pack()

root.mainloop()
