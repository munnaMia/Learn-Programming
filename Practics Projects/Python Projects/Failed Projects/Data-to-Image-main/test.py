import tkinter as tk
from tkinter import filedialog
import os

def search_file():
    file_path = luf_entry_ip.get()
    if os.path.isfile(file_path):
        # Set the value of the Entry widget to the selected file path
        luf_entry_ip.delete(0, tk.END)  # Clear any existing value
        luf_entry_ip.insert(tk.END, file_path)
        print("Selected file:", file_path)

        # Read the file and store its content in a variable
        with open(file_path, 'r') as file:
            file_content = file.read()

        # Clear any existing content in the text widget
        text_widget.delete("1.0", tk.END)

        # Insert the file content into the text widget
        text_widget.insert(tk.END, file_content)
    else:
        print("File not found:", file_path)

# Create a Tkinter window
window = tk.Tk()

# Create a left frame
left_frame = tk.Frame(window)
left_frame.pack()

# Create an Entry widget
luf_entry_ip = tk.Entry(left_frame, width=31)
luf_entry_ip.place(x=50, y=44)

# Create a button for searching
luf_search = tk.Button(left_frame, text="Search", command=search_file)
luf_search.place(x=245, y=42)

# Create a text widget to display the file content
text_widget = tk.Text(window)
text_widget.pack()

# Start the Tkinter event loop
window.mainloop()
