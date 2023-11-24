from PIL import Image
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes
import base64
import os


def convert_binary_to_image(binary_data, image_width):
    # Calculate the image dimensions
    num_pixels = len(binary_data)
    num_rows = (num_pixels + image_width -
                1) // image_width  # Ceiling division

    # Create a new image with black pixels
    image = Image.new('1', (image_width, num_rows), color=0)

    # Create a pixel access object for the image
    pixels = image.load()

    # Set the pixel values based on the binary data
    for i, binary_digit in enumerate(binary_data):
        row = i // image_width
        col = i % image_width

        # Set pixel color based on binary digit
        pixel_value = int(binary_digit)
        pixels[col, row] = pixel_value

    return image


# this part is used for encryption
def encrypt_text(key, text):
    cipher = AES.new(key, AES.MODE_CBC)
    ciphertext = cipher.encrypt(pad(text.encode(), AES.block_size))
    iv = base64.b64encode(cipher.iv).decode('utf-8')
    ciphertext = base64.b64encode(ciphertext).decode('utf-8')
    return iv, ciphertext


text = "text/plain"
output_directory = os.path.dirname(os.path.abspath(__file__))
output_path = os.path.join(output_directory, 'output.png')


def run():
    global text, output_path
    key = get_random_bytes(16)  # Generate a random 128-bit (16 bytes) key

    iv, ciphertext = encrypt_text(key, text)

    # Convert text data to binary
    binary_data = "".join(format(ord(c), "08b") for c in ciphertext)

    # Example usage
    image_width = 500  # Adjust as needed

    # Convert binary data to image
    image = convert_binary_to_image(binary_data, image_width)

    # Save the image
    image.save(output_path)

    # convert key to an int as password
    key_as_int = int.from_bytes(key, byteorder='big')
    return [key_as_int, iv]
