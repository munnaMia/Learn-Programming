from tkinter import filedialog
import tkinter.messagebox as messagebox
import tkinter as tk
from tkinter import ttk
import Encrypt
import Decrypt
from PIL import ImageTk
# ========================================main window=====================================
# Create a window for the project
window = tk.Tk()

# set a default window size
window.geometry("700x600")

# set a title for our project
window.title("Pixel Crypt")

# Configure the background color
window.configure(bg="#232323")

# Stop resizing
window.resizable(False, False)

# Its something like a container for our tab
tabContainer = ttk.Notebook(window)

# ========================================main tab=====================================

# adding this to tab to the container and main frame
encryption = tk.Frame(tabContainer, background="#232323")
decryption = tk.Frame(tabContainer, background="#232323")

# adding this to the main window
tabContainer.add(encryption, text="Encryption")
tabContainer.add(decryption, text="Decryption")
tabContainer.pack(expand=True, fill="both")


# ========================================main encrypt tab=====================================

# head line for encryption tab
headEncryTab = tk.Label(encryption, text="Encrypt", fg="#FFFFFF",
                        bg="#232323", font=("Helvetica", 28, "bold"))
headEncryTab.pack()

# test input for encryption
textEntry = tk.Text(encryption, height=10, width=40, font=(
    "Helvetica"), background='#626262', foreground='#ffffff')
textEntry.pack(pady=12)

# Process button click event


def process_encryption():
    text = textEntry.get("1.0", tk.END).strip()
    Encrypt.text = text
    encryption_result = Encrypt.run()
    keyEn.insert(tk.END, encryption_result[0])
    ivEn.insert(tk.END, encryption_result[1])
    output_path = Encrypt.output_path
    image_tk = ImageTk.PhotoImage(file=output_path)

    # Create an image item on the ImageCanvas
    image_item = ImageCanvas.create_image(0, 0, anchor='nw', image=image_tk)

    # Configure the ImageCanvas to match the image dimensions
    ImageCanvas.configure(width=image_tk.width(), height=image_tk.height())

    # Make sure to keep a reference to the image_tk object
    # to prevent it from being garbage collected
    ImageCanvas.image_tk = image_tk


# now two buttons, one to clear text and the other to process
processEncry = tk.Button(encryption, text='Process', height=1, width=7, font=(
    "Helvetica", 10, "bold"), foreground="#00E562", background='#232323', command=process_encryption)
processEncry.place(x=550, y=170)

clearEn = tk.Button(encryption, text='Clear', height=1, width=7, font=(
    "Helvetica", 10, "bold"), foreground="#3498DB", background='#232323')
clearEn.place(x=550, y=210)

# here I will work on output image
ImageCanvas = tk.Canvas(encryption, height=200,
                        width=300, background='#232323')
ImageCanvas.place(x=12, y=300)

# SaveImage = tk.Button(encryption, text='Save', height=1, width=7, font=(
#     "Helvetica", 10, "bold"), foreground="#00E562", background='#232323')
# SaveImage.place(x=125, y=510)

# here I will work on password
keyEnText = tk.Label(encryption, text="Password1", font=(
    "Helvetica", 12, "bold"), background='#232323', foreground='#ffffff')
keyEnText.place(x=340, y=355)

keyEn = tk.Text(encryption, height=2, font=("Arial"), width=25,
                foreground='#ffffff', background='#242424')
keyEn.place(x=430, y=350)

# password 2
ivEnText = tk.Label(encryption, text="Password2", font=(
    "Helvetica", 12, "bold"), background='#232323', foreground='#ffffff')
ivEnText.place(x=340, y=400)

ivEn = tk.Text(encryption, height=2, font=("Arial"), width=25,
               foreground='#ffffff', background='#242424')
ivEn.place(x=430, y=395)

# ========================================main decrypt tab=====================================
# File select button click event


def select_image_file():
    file_path = filedialog.askopenfilename(
        filetypes=[("Image files", "*.png *.jpg *.jpeg")])
    if file_path:
        imageEntryLoc.delete("1.0", tk.END)
        imageEntryLoc.insert(tk.END, file_path)


# Process decryption button click event
def process_decryption():
    image_path = imageEntryLoc.get("1.0", tk.END).strip()
    password1 = pass1Text.get("1.0", tk.END).strip()
    password2 = pass2Text.get("1.0", tk.END).strip()

    # Perform decryption here
    Decrypt.key = int(password1)
    Decrypt.iv = password2
    Decrypt.encrypted_file = image_path

    # Update the output result
    outputResul.delete("1.0", tk.END)
    outputResul.insert(tk.END, f"Decrypted Text: {Decrypt.run()}\n")


# Copy button click event
def copy_text():
    text_to_copy = outputResul.get("1.0", tk.END).strip()
    if text_to_copy:
        window.clipboard_clear()
        window.clipboard_append(text_to_copy)
        messagebox.showinfo("Copy Successful", "Text copied to clipboard.")


# head line for decryption tab
headDecryTab = tk.Label(decryption, text="Decrypt", fg="#FFFFFF",
                        bg="#232323", font=("Helvetica", 28, "bold"))
headDecryTab.pack()

# entry image label
fileSelectBtn = tk.Button(decryption, text="Select File", height=1, width=10,
                          background="#232323", foreground="#0072FF", font=("Arial", 8, "bold"), command=select_image_file)
fileSelectBtn.place(x=290, y=103)

imageEntryLoc = tk.Text(decryption, height=1, width=29,
                        background="#222222", foreground="#ffffff", font=("Arial", 8))
imageEntryLoc.place(x=110, y=105)


# password entry labels
pass1 = tk.Label(decryption, text="Enter Password1", foreground="#ffffff",
                 background="#232323", font=("Helvetica", 12, "bold"))
pass1.place(x=10, y=150)

pass1Text = tk.Text(decryption, height=1, width=54,
                    background="#323232", foreground="#ffffff", font=("Arial", 8))
pass1Text.place(x=10, y=180)

pass2 = tk.Label(decryption, text="Enter Password2", foreground="#ffffff",
                 background="#232323", font=("Helvetica", 12, "bold"))
pass2.place(x=10, y=220)

pass2Text = tk.Text(decryption, height=1, width=54,
                    background="#323232", foreground="#ffffff", font=("Arial", 8))
pass2Text.place(x=10, y=250)

# output process btn
processDecry = tk.Button(decryption, text="Process", background="#232323",
                         foreground="#00E562", font=("Arial", 12, "bold"), command=process_decryption)
processDecry.place(x=128, y=290)

# output section will be down here

outputResul = tk.Text(decryption, height=22, width=35, font=(
    "Arial"), background="#212121", foreground="#ffffff")
outputResul.place(x=360, y=100)

copyBtn = tk.Button(decryption, text="Copy Text", height=1, width=7, font=(
    "Helvetica", 10, "bold"), foreground="#3498DB", background='#232323', command=copy_text)
copyBtn.place(x=487, y=510)

# run the window
window.mainloop()
