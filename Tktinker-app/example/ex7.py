from tkinter import *

root = Tk()


def leftClick(event):
    print('left')


frame = Frame(root, width=300, height=200)
frame.bind('<Button-1>', leftClick)
frame.pack()
root.mainloop()
