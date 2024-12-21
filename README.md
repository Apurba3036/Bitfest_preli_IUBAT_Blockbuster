# 🚀 Challenge 1: Banglish-to-Bengali Transliteration

Welcome to the **Banglish-to-Bengali Transliteration** challenge! 📝

This repository contains the code and dataset for solving the problem of converting Banglish (Bengali written in English letters) into proper Bengali script. 

## 📂 Folder Structure

- **Dataset**: The dataset used for this project is `SKNahin/bengali-transliteration-data`, which is available on Hugging Face. It contains Banglish text and its corresponding Bengali transliteration.
  
- **Code**: The code for training and fine-tuning a machine learning model to convert Banglish text into Bengali is included in this folder.
  
- **Saved Model**: The trained model is saved in the Kaggle working directory (`/kaggle/working/`) for easy reuse.

## 🛠️ Setup Instructions

### Prerequisites

Before running the code, you need to install the following dependencies:

```bash
!pip install datasets transformers tokenizers accelerate torch torchvision torchaudio evaluate scikit-learn
!pip install huggingface-hub
```

# 🚀 Challenge 2: Recipe Chatbot and Image Analysis with Gemini API

Welcome to **Challenge 2**, where we combine AI-powered chatbot capabilities with advanced image analysis to create a recipe assistant! 🥘🤖

This repository includes a **Recipe Chatbot** for generating recipes based on user inputs and an **Image Analyzer** that utilizes Gemini API for OCR (Optical Character Recognition) to extract ingredients from images and store them in MongoDB.

## 📂 Folder Structure

- **Chatbot**: A fully functional chatbot powered by the Gemini API that provides recipe suggestions based on user input. It answers recipe-related queries.
  
- **Image Analyzer**: An image analysis tool that uses the Gemini API to extract ingredients from images of recipes. The extracted text is saved in a MongoDB database for easy retrieval.

- **MongoDB**: MongoDB is used to store the ingredients extracted from the images. This allows users to query the ingredients easily for different recipes.

## 🛠️ Setup Instructions

!pip install gemini-api mongodb-client transformers torch

![image](https://github.com/user-attachments/assets/2bdfea7f-099d-418c-bbf1-c42f8f5012a2)

