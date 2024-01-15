import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async() => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }
  useEffect(()=>{
    fetchBooks();
  }, []);

  const createBook = async(title) => {
    var timestamp = new Date().toString();
    const response = await axios.post('http://localhost:3001/books', {
      title, time: timestamp
    })
    const updateBooks = [...books, response.data];

    setBooks(updateBooks);
    // console.log(currDate.getDate(), currDate.getMonth()+1, currDate.getFullYear(), currDate.getHours(), currDate.getMinutes(), currDate.getSeconds());
  }

    const editBookById = async (id, newTitle) => {
      const response = await axios.put(`http://localhost:3001/books/${id}`,{
        title: newTitle, time: new Date().toString()
      })
      const updateBooks = books.map((book) => {
        if(book.id === id){
          return {...book, ...response.data};
        }

        return book;
      })

      setBooks(updateBooks);
    }
    // console.log(books[books.length-1]);

    const deleteBookById = async (id) => {
      await axios.delete(`http://localhost:3001/books/${id}`);
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
