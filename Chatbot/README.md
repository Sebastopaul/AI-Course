# Chatbot with Gemini

The project consists in a simple CLI Chatbot using a Gemini model.
It can help you find nice recipes for you to savor.

## Launching project

```bash
npm run start
```

## Exit project

Press `Ctrl` + `D` or enter `exit` in the CLI.

# Fine-Tuning with Gemini API

## Introduction

Fine-tuning is a process of which the goal is to improve your model's efficiency when doing specific tasks.
It can also help formatting its output in a specific way, or recognize specific inputs to avoid processing them.

Using the Gemini API, the idea is to create a new model, based on an existing one, and train it using example data as well as hyper parameters.
The goal is to give your new model enough data to train on and adjust the hyper parameters so it stays accurate.

## Training data

The training data must be formatted like this:
```json
[
  {"text_input": "1", "output": "2"},
  {"text_input": "3", "output": "4"},
  {"text_input": "-3", "output": "-2"},
  {"text_input": "twenty two", "output": "twenty three"},
  {"text_input": "two hundred", "output": "two hundred one"},
  {"text_input": "ninety nine", "output": "one hundred"},
  {"text_input": "8", "output": "9"},
  {"text_input": "-98", "output": "-97"},
  {"text_input": "1,000", "output": "1,001"},
  {"text_input": "10,100,000", "output": "10,100,001"},
  {"text_input": "thirteen", "output": "fourteen"},
  {"text_input": "eighty", "output": "eighty one"},
  {"text_input": "one", "output": "two"},
  {"text_input": "three", "output": "four"},
  {"text_input": "seven", "output": "eight"}
]
```

## Hyper parameters

Hyper parameters are parameters that will affect the way your new model will train on your data.
They are :
* Epochs: A full training pass over the entire training set such that each example has been processed once.
* Batch size: The set of examples used in one training iteration. The batch size determines the number of examples in a batch.
* Learning rate: A floating-point number that tells the algorithm how strongly to adjust the model parameters on each iteration. For example, a learning rate of 0.3 would adjust weights and biases three times more powerfully than a learning rate of 0.1. High and low learning rates have their own unique trade-offs and should be adjusted based on your use case.
* Learning rate multiplier: The rate multiplier modifies the model's original learning rate. A value of 1 uses the original learning rate of the model. Values greater than 1 increase the learning rate and values between 1 and 0 lower the learning rate.

## Loss

The loss is a concept in model training that shows how much the model prediction's deviates from the ideal predictions in the given examples.
If the model's loss is high up at the end of its training, it will have very off-topic results, as it has during training.
If the model's loss is too low at the end of its training (like 0), it might have very off-topic results as well, even though its results were perfect during training.

## Limitations

Tuned models have the following limitations:
* The input limit of a tuned Gemini 1.5 Flash model is 40,000 characters.
* JSON mode is not supported with tuned models.
* Only text input is supported.