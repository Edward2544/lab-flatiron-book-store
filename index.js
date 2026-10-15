const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}
// ===== MAIN CHALLENGE =====

// 1. UPDATE EXISTING ELEMENT - Update the header title
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// 2. CREATE NEW ELEMENTS - Loop through books and create elements
const bookList = document.getElementById("book-list");

bookStore.books.forEach((book) => {
  // Create container for each book
  const bookContainer = document.createElement("li");
  
  // Create title element
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = book.title;
  
  // Create author element
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = book.author;
  
  // Create image element
  const bookImage = document.createElement("img");
  bookImage.src = book.imageUrl;  // Changed from book.image to book.imageUrl
  bookImage.alt = book.title;
  
  // Append elements to container
  bookContainer.append(bookImage);
  bookContainer.append(bookTitle);
  bookContainer.append(bookAuthor);
  
  // Append container to book list
  bookList.append(bookContainer);
});

// ===== BONUS CHALLENGE =====
// Delete the element with id "delete-this"
const elementToDelete = document.getElementById("delete-this");
if (elementToDelete) {
  elementToDelete.remove();
}
// Write your code here!

