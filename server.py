from flask import Flask, request, jsonify
from tensorflow.lite.python.interpreter import Interpreter
import numpy as np
import cv2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

labels = ['deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu', 'deepika', 'amitabh', 'amrish', 'anil', 'akshay', 'nana', 'ranveer', 'sridevi', 'sunny', 'tabu']


# Load the TensorFlow Lite model
interpreter = Interpreter(model_path=r"D:\sonia\machine learning\fullstack-backend\facenet.tflite")
interpreter.allocate_tensors()

# Define input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

# Preprocess function to prepare input data for inference
def preprocess_image(image):
    image = cv2.resize(image, (input_details[0]['shape'][2], input_details[0]['shape'][1]))
    image = image / 255.0  # Normalize image
    image = np.expand_dims(image, axis=0)
    return image.astype(input_details[0]['dtype'])

# Function to perform inference
def predict(image):
    input_data = preprocess_image(image)
    interpreter.set_tensor(input_details[0]['index'], input_data)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_details[0]['index'])
    return output_data

# Endpoint for prediction
@app.route('/predict', methods=['POST'])
def prediction():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})
    file = request.files['image']
    image = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_COLOR)
    if image is None:
        return jsonify({'error': 'Invalid image file'})
    prediction_result = predict(image)
    op_list = list(prediction_result[0])
    max_element = max(op_list)
    predicted_label = labels[op_list.index(max_element)]
    # Process prediction_result as needed
    print(predicted_label)
    print(op_list)
    return jsonify({'prediction': predicted_label})

if __name__ == '__main__':
    app.run(debug=True)
