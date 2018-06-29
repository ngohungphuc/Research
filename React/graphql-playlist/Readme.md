```js
mutation {
  addAuthor(name: "Tony", age: 23) {
    name
    age
  }
}

mutation {
  addBook(name: "Long Earth", genre:"Sci-Fi", authorId:"5b35d40711fdaa1a44aa74eb") {
    name
    genre
  }
}
```
