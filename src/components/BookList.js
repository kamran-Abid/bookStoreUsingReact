import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
    const renderBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
      })
      //  style={{marginLeft: '10px', listStyle: 'square inside url("sqpurple.gif'}}
  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  );
}

export default BookList;
