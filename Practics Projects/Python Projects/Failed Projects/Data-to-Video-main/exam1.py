import cv2
import numpy as np

# Read the text data
with open(r'C:\Users\MM IT\Desktop\Python\Python AI & ML\test.txt', 'r') as file:
    text_data = file.read()

# Convert text data to binary
binary_data = "".join(format(ord(c), "08b") for c in text_data)

# Set video properties
frame_width = 640
frame_height = 480
fps = 24

# Calculate the number of frames needed
num_frames = int(np.ceil(len(binary_data) / (frame_width * frame_height)))

# Create VideoWriter object
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
out = cv2.VideoWriter('output.mp4', fourcc, fps, (frame_width, frame_height))

# Generate frames and write to video
for i in range(num_frames):
    frame = np.zeros((frame_height, frame_width, 3), dtype=np.uint8)

    # Calculate the start and end index for the current frame
    start_idx = i * frame_width * frame_height
    end_idx = (i + 1) * frame_width * frame_height

    # Update pixels in the frame based on binary data
    for idx, pixel in enumerate(binary_data[start_idx:end_idx]):
        row = idx // frame_width
        col = idx % frame_width

        # Set pixel color based on binary digit
        if pixel == '1':
            frame[row, col] = [255, 255, 255]  # White pixel
        else:
            frame[row, col] = [0, 0, 0]  # Black pixel

    # Write frame to video
    out.write(frame)

# Release the VideoWriter object
out.release()
