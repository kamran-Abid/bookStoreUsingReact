import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const handleUpdate = (event) => {
      setTitle(event.target.value);
    }
    const handleSubmitUpdate = (e) => {
        e.preventDefault();
        onSubmit(book.id, title);
    }
  return (
    <form className="book-edit" onSubmit={handleSubmitUpdate}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleUpdate} />
      <button className="button is-primary" onSubmit={handleSubmitUpdate}>Update</button>
    </form>
  );
}

export default BookEdit;
