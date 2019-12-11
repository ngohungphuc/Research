# Question
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. 

## Answer
```python
def friend(x):
    #Code
    itemList = []
    for item in x:
        if(len(item) == 4):
            itemList.append(item)
    return itemList        
```            

# Question

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

## Answer
```python
def square_digits(num):
    result = ""
    for d in str(num):
        result += str(int(d)**2)
    return int(result)    
```