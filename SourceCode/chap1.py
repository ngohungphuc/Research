from sklearn import datasets

house_prices = datasets.load_boston()
print(house_prices.data)

digits = datasets.load_digits()
print(digits.images[4])