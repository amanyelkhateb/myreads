import React from "react";
import { PropTypes } from "prop-types";

const BookShelfSelector = ({ book, setBookToShelf }) => {
  //   building fuc to handle the change of the value of the book shelf
  const setSelectedBookToShelf = (e) => {
    const value = e.target.value;
    setBookToShelf(book, value);
  };
  return (
    <select
      onChange={setSelectedBookToShelf}
      value={book.shelf ? book.shelf : "none"}
    >
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
};

BookShelfSelector.propTypes = {
  book: PropTypes.object.isRequired,
  setBookToShelf: PropTypes.func.isRequired,
};
export default BookShelfSelector;
