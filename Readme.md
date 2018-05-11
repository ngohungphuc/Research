# Artificial Intelligence learning with Python

## What is Artificial Intelligence?

Artificial Intelligence (AI) is a way to make machines think and behave intelligently. These
machines are controlled by software inside them, so AI has a lot to do with intelligent
software programs that control these machines. It is a science of finding theories and
methodologies that can help machines understand the world and accordingly react to
situations in the same way that humans do.

Below diagram illustrates how raw data convert to wisdom various level of processing:

<img src="img/how raw data gets converted to wisdom through various levels of processing.png"/>

<img src="img/database training.png"/>

### Branches of AI

* **Machine learning and pattern recognition** : This is perhaps the most popular
  form of AI out there. We design and develop software that can learn from data.
  Based on these learning models, we perform predictions on unknown data. One
  of the main constraints here is that these programs are limited to the power of the
  data. If the dataset is small, then the learning models would be limited as well.
* **Logic-based AI** : Mathematical logic is used to execute computer programs in
  logic-based AI. A program written in logic-based AI is basically a set of
  statements in logical form that express facts and rules about a particular problem
  domain. This is used extensively in pattern matching, language parsing, semantic
  analysis, and so on.
* **Search** : The Search techniques are used extensively in AI programs. These
  programs examine a large number of possibilities and then pick the most optimal
  path. For example, this is used a lot in strategy games such as Chess, networking,
  resource allocation, scheduling, and so on.
* **Knowledge representation** : The facts about the world around us need to be
  represented in some way for a system to make sense of them. The languages of
  mathematical logic are frequently used here. If knowledge is represented
  efficiently, systems can be smarter and more intelligent.
* **Planning** : This field deals with optimal planning that gives us maximum returns
  with minimal costs. These software programs start with facts about the particular
  situation and a statement of a goal. These programs are also aware of the facts of
  the world, so that they know what the rules are. From this information, they
  generate the most optimal plan to achieve the goal.
* **Heuristics** : A heuristic is a technique used to solve a given problem that's
  practical and useful in solving the problem in the short term, but not guaranteed
  to be optimal. This is more like an educated guess on what approach we should
  take to solve a problem. In AI, we frequently encounter situations where we
  cannot check every single possibility to pick the best option. So we need to use
  heuristics to achieve the goal. They are used extensively in AI in fields such as
  robotics, search engines, and so on.
* **Genetic programming**: Genetic programming is a way to get programs to solve a
  task, by mating programs and selecting the fittest. The programs are encoded as a
  set of genes, using an algorithm to get a program that is able to perform the given
  task really well.

## Classification and Regression Using Supervised Learning

### Supervised versus unsupervised learning

One of the most common ways to impart artificial intelligence into a machine is through
machine learning. The world of machine learning is broadly divided into supervised and
unsupervised learning.

* **Supervised learning** refers to the process of building a machine learning model that is
  based on labeled training data. For example, let's say that we want to build a system to
  automatically predict the income of a person, based on various parameters such as age,
  education, location, and so on. To do this, we need to create a database of people with all
  the necessary details and label it. By doing this, we are telling our algorithm what
  parameters correspond to what income. Based on this mapping, the algorithm will learn
  how to calculate the income of a person using the parameters provided to it.

* **Unsupervised learning** refers to the process of building a machine learning model without
  relying on labeled training data. In some sense, it is the opposite of what we just discussed
  in the previous paragraph. Since there are no labels available, you need to extract insights
  based on just the data given to you. For example, let's say that we want to build a system
  where we have to separate a set of data points into multiple groups. The tricky thing here is
  that we don't know exactly what the criteria of separation should be. Hence, an
  unsupervised learning algorithm needs to separate the given dataset into a number of
  groups in the best way possible.

### What is classification?

The process of classification is one such technique where we classify data into a given number of classes.
During classification, we arrange data into a fixed number of categories so that it can be
used most effectively and efficiently.

In machine learning, classification solves the problem of identifying the category to which a
new data point belongs. We build the classification model based on the training dataset
containing data points and the corresponding labels. For example, let's say that we want to
check whether the given image contains a person's face or not. We would build a training
dataset containing classes corresponding to these two classes: face and no-face. We then
train the model based on the training samples we have. This trained model is then used for
inference.

### Preprocessing data

We deal with a lot of raw data in the real world. Machine learning algorithms expect data to
be formatted in a certain way before they start the training process. In order to prepare the
data for ingestion by machine learning algorithms, we have to preprocess it and convert it
into the right format.

There are 4 preprocessing technique:

* Binarization
* Mean removal
* Scaling
* Normalization

#### Binarization

This process is used when we want to convert our numerical values into boolean values

#### Mean removal

Removing the mean is a common preprocessing technique used in machine learning. It's
usually useful to remove the mean from our feature vector, so that each feature is centered
on zero. We do this in order to remove bias from the features in our feature vector.
