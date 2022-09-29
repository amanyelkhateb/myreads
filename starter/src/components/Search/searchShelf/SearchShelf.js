import React, { useDeferredValue } from "react";
import Book from "../../Home/Shelf/Book/Book";
import { PropTypes } from "prop-types";

const SearchShelf = ({ setBookToShelf, searchQuery, mergedBooks }) => {
  const noData = <div className="no_data">There's No Data To Show</div>;
  const deferredMergedBooks = useDeferredValue(mergedBooks);
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {
          deferredMergedBooks?.length > 0 && searchQuery?.trim().length > 0 
          ? deferredMergedBooks.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                setBookToShelf={setBookToShelf}
              />
            );
          })
          : noData 
        }
      </ol>
    </div>
  );
};

SearchShelf.propTypes = {
  setBookToShelf: PropTypes.func.isRequired,
  mergedBooks: PropTypes.array.isRequired,
  searchQuery: PropTypes.string,
};
export default SearchShelf;
