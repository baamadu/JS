const person = {
  name: "Amadu",
  age: 17,
  hobbies: ["voetbal;", "wandelen", "gamen"],
};

console.log(person);

let fruits = [];
fruits.push("appel", "perzik", "sinaasappel");
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
const books = [
  {
    title: "Harry Potter en de Steen der Wijzen",
    author: "J.K. Rowling",
    pages: 232,
  },

  {
    title: "De Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
  },

  {
    title: "De Grijze Jager",
    author: "Rick Riordan",
    pages: 230,
  },
];


console.log(books[0]);for (let i = 0; i < books.length; i++) {
  const book = books[i];
  console.log(`Titel: ${book.title}. auteur: ${book.author}. Aantal pagina's: ${book.pages} `);
}

books[0].genre = "Fantasie";

