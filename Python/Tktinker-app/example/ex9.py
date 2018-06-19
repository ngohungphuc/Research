from tkinter import *


def doNothing():
    print("ok")


root = Tk()

menu = Menu(root)
root.config(menu=menu)

subMenu = Menu(menu)
# create file menu and add submenu as dropdown
menu.add_cascade(label="File", menu=subMenu)
subMenu.add_command(label="Now Project", command=doNothing)
subMenu.add_separator()

# toolbar
toolbar = Frame(root, bg="blue")
insertBut = Button(toolbar, text="Insert Image", command=doNothing)
# 2px of padding
insertBut.pack(side=LEFT, padx=2, pady=2)
toolbar.pack(side=TOP, fill=X)

# status bar
status = Label(root, text="Prepare", bd=1, relief=SUNKEN, anchor=W)
status.pack(side=BOTTOM, fill=X)
root.mainloop()
