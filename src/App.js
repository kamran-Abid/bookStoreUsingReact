import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    var timestamp = new Date().getTime();
    const updateBooks = [...books, { id: timestamp, title }];
    // const currDate = new Date(timestamp);

    setBooks(updateBooks);
    // console.log(currDate.getDate(), currDate.getMonth()+1, currDate.getFullYear(), currDate.getHours(), currDate.getMinutes(), currDate.getSeconds());
  }

    const editBookById = (id, newTitle) => {
      const updateBooks = books.map((book) => {
        if(book.id === id){
          var newBkObj = {...book, title: newTitle};
          return newBkObj;
        }

        return book;
      })

      setBooks(updateBooks);
    }
    // console.log(books[books.length-1]);

    const deleteBookById = (id) => {
      const updateBooks = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(updateBooks);
    };
    return (
      <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
      </div>
    );
  };

export default App;
