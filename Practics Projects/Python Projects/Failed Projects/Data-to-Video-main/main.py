file = open(r'C:\Users\MM IT\Desktop\Python\Python AI & ML\test.txt', 'r')
lines = file.readlines()

# Binary conversion
binary = " ".join(format(ord(c), "b") for line in lines for c in line)
print(binary)

# Text conversion
normal = "".join(chr(int(x, 2)) for x in binary.split(" "))
print(normal)

file.close()
