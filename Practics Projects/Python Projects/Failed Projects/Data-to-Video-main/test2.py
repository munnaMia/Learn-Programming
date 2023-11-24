import cv2
import numpy as np

# Open the video
video = cv2.VideoCapture('output.mp4')

# Retrieve video properties
frame_width = int(video.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(video.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = video.get(cv2.CAP_PROP_FPS)
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
            # Convert pixel value to binary string
            binary_value = ''.join(format(channel, '08b') for channel in pixel[:3])

            # Append the least significant bit of each channel to binary_data
            binary_data += binary_value[-1]

# Close the video
video.release()

# Convert binary data to text
text_data = "".join(chr(int(binary_data[i:i+8], 2)) for i in range(0, len(binary_data), 8))

# Print the original text data
print(text_data)
