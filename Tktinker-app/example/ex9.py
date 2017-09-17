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
root.mainloop()
