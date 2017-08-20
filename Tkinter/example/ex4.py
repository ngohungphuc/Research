from tkinter import *

root = Tk()

label_1 = Label(root, text='Name')
label_2 = Label(root, text='Password')
entry_1 = Entry(root)
entry_2 = Entry(root)

label_1.grid(row=0)
label_2.grid(row=1)

entry_1.grid(row=0, column=1)
entry_2.grid(row=1, column=1)
root.mainloop()
