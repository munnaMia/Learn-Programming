import tkinter as tk
from tkinter import ttk

#screen sizing and overall style for main window
root = tk.Tk()
root.title("Pixel Crypt")

style = ttk.Style()
style.configure('TNotebook', tabposition='n', background='lightgray')
style.configure('TNotebook.Tab', padding=(10, 5), font=('Helvetica', 12, 'bold'))

tabContainer = ttk.Notebook(root)
tabContainer.pack(fill="both", expand=True)

encryptTab = tk.Frame(tabContainer)
decryptTab = tk.Frame(tabContainer)
aboutTab = tk.Frame(tabContainer)

tabContainer.add(encryptTab, text="Encrypt")
tabContainer.add(decryptTab, text="Decrypt")
tabContainer.add(aboutTab, text="About")

root.geometry("700x600")
root.mainloop()