import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
import os
import Encrypt
from PIL import ImageTk


def browser():
    if(luf_entry_ip.get() == '1'):
        file_path = luf_entry_ip.get()
        if os.path.isfile(file_path):
            # Set the value of the Entry widget to the selected file path
            luf_entry_ip.delete(0, tk.END)  # Clear any existing value
            luf_entry_ip.insert(tk.END, file_path)

            with open(file_path, 'r') as file:
                text_data = file.read()

        else:
            print("File not found:", file_path)
    else:
        file_path = filedialog.askopenfilename(initialdir='/c', title='Selecting Txt file', filetypes=(("txt files", "*.txt"),))
        # Do something with the selected file path, such as printing it
        luf_entry_ip.delete('0', tk.END)
        luf_entry_ip.insert(tk.END, file_path)

        with open(file_path, 'r') as file:
                text_data = file.read()
    return text_data




def process_encryption():
    text = browser()
    Encrypt.text = text
    encryption_result = Encrypt.run()
    
    output_path = Encrypt.output_path
    image_tk = ImageTk.PhotoImage(file=output_path)

    # Create an image item on the ImageCanvas
    image_item = image_show.create_image(0, 0, anchor='nw', image=image_tk)

    # Configure the ImageCanvas to match the image dimensions
    image_show.configure(width=image_tk.width(), height=image_tk.height())

    # Make sure to keep a reference to the image_tk object
    # to prevent it from being garbage collected
    image_show.image_tk = image_tk











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

#=======================================encrypt tab================================




#Title of the screen "Encrypt"
head_Of_EncryptTab = tk.Label(encryptTab, text="Encrypt", fg="#232323", font=("Helvetica", 28, "bold"))
head_Of_EncryptTab.pack(side='top')



# Create the frame for the left section
left_frame = tk.Frame(encryptTab, bg='#e0e0e0')
left_frame.pack(side='left', fill='both', expand=True)


# #left upper frame corner head
luF_head = tk.Label(left_frame, text="Input File", fg="#232323", bg='#e0e0e0', font=("Arial", 20, "bold"))
luF_head.pack(fill="both")

luf_text_ip = tk.Label(left_frame, text="File :",  fg="#232323", bg='#e0e0e0', font=("Arial", 16))
luf_text_ip.pack(anchor="w")

luf_entry_ip = tk.Entry(left_frame, width=31)
luf_entry_ip.place(x=50, y=44)

luf_browser = tk.Button(left_frame, text="Search", command=browser)
luf_browser.place(x=245, y=42)


#some button style
luf_process_btn = tk.Button(left_frame, text='Process', height=1, width=6, font=('Areal', 12, 'bold'), command=process_encryption)
luf_process_btn.pack(anchor='s', pady=60)



#output password key's
key1 = tk.Label(left_frame, text='Password 1', fg="#232323", bg='#e0e0e0', font=('Areal', 12, 'bold'))
key1.pack(anchor="w", padx=5, pady=5)

key2 = tk.Label(left_frame, text='Password 2', fg="#232323", bg='#e0e0e0', font=('Areal', 12, 'bold'))
key2.pack(anchor="w", padx=5, pady=5)

#some button 
copy_btn = tk.Button(left_frame, text='Copy', font=('Areal', 12, 'bold'))
copy_btn.pack(anchor='center')

msg_copy = tk.Label(left_frame, text='Password copy to the clip board!', fg="#232323", bg='#e0e0e0')
msg_copy.pack(anchor='center')



     
# Create the frame for the right section
right_frame = tk.Frame(encryptTab, bg='#c2c2c2')
right_frame.pack(side='left', fill='both', expand=True)

image_show = tk.Canvas(right_frame, height=400, width=150, background='#323232')
image_show.pack(fill='both')

save_btn = tk.Button(right_frame, text='Save', font=('Areal', 12, 'bold'))
save_btn.pack(anchor='center')











root.geometry("700x600")
root.mainloop()