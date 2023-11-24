import numpy as np
from PIL import Image
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes
import base64
import Encrypt


def decrypt_text(key, iv, ciphertext):
    iv = base64.b64decode(iv)
    ciphertext = base64.b64decode(ciphertext)
    cipher = AES.new(key, AES.MODE_CBC, iv)
    decrypted_text = unpad(cipher.decrypt(ciphertext),
                           AES.block_size).decode('utf-8')
    return decrypted_text


key = None
iv = None
encrypted_file = None


def run():
    global key, iv, encrypted_file
    # Open the image
    image = Image.open(encrypted_file)

    # Convert the image to grayscale
    image = image.convert('L')

    # Load the pixel data
    pixels = np.array(image)

    # Flatten the pixel data to a 1-dimensional array
    pixel_array = pixels.flatten()

    # Convert pixel values to binary data
    binary_data = ''.join(
        '1' if pixel == 255 else '0' for pixel in pixel_array)

    # Convert binary data to text
    text_data = ""
    for i in range(0, len(binary_data), 8):
        byte = binary_data[i:i+8]
        if byte:
            decimal_value = int(byte, 2)
            character = chr(decimal_value)
            text_data += character

    # Print the extracted text data
    print(text_data)
    byte_sequence = key.to_bytes((key.bit_length() + 7) // 8, 'big')

    decrypted_text = decrypt_text(byte_sequence, iv, text_data)
    return decrypted_text
