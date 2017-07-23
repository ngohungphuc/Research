def banner(message, border='-'):
    line = border * len(message)
    print(line)
    print(message)
    print(line)

banner("Norwegian Blue")
banner("Sun, Moon and Stars", "*")
banner("Sun, Moon and Stars", border="*")
banner(border=".", message="Hello from Earth")
