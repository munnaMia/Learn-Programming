import cv2
import numpy as np

# Open the video
video = cv2.VideoCapture('output.mp4')

# Retrieve video properties
frame_width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))
total_frames = int(video.get(cv2.CAP_PROP_FRAME_COUNT))

# Initialize binary data string
binary_data = ""

# Read frames and extract binary data
for _ in range(total_frames):
    ret, frame = video.read()
    if not ret:
        break

    # Iterate through the pixels and extract binary data
    for row in frame:
        for pixel in row:
            # Check if the pixel is white (255, 255, 255)
            if np.array_equal(pixel, [255, 255, 255]):
                binary_data += "1"
            else:
                binary_data += "0"

# Close the video
video.release()


with open(r'C:\Users\MM IT\Desktop\Python\Python AI & ML\test.txt', 'r') as file:
    text_data = file.read()

# Convert text data to binary
binary_data1 = "".join(format(ord(c), "08b") for c in text_data)

print(binary_data == binary_data1)
# # Convert binary data to text
# text_data = ""
# binary_chunks = binary_data.split("  ")  # Split by two spaces
# for chunk in binary_chunks:
#     if chunk:
#         decimal_value = int(chunk, 2)
#         byte_value = decimal_value.to_bytes((decimal_value.bit_length() + 7) // 8, 'big')
#         character = byte_value.decode('utf-8', errors='ignore')
#         text_data += character

# # Print the original text data
# print(text_data)
