import React from "react";
import SearchShelf from "./searchShelf/SearchShelf";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

// Component to handle the home button
const BackToHomeButton = () => {
  return (
    <Link to="/" className="close-search">
      Close Button
    </Link>
  );
};


const Search = ({
  setBooksNameInSearchQuery,
  searchQuery,
  setBookToShelf,
  mergedBooks,
}) => {
  return (
    <>
      <Helmet>
        <title>MyRead SearchPage</title>
        <link rel="canonical" href="/search" />
        <meta
          name="description"
          content="My Reads React SPA(provide search component navigate between shelves without reload page),it represents virtual bookcase to store your books and track what you're reading"
        />
        {/* this meta to prevent robots of searches to reach search page */}
        {/* <meta name="robots" content="noindex"/> */}
      </Helmet>
      <div className="search-books">
        <div className="search-books-bar">
          <BackToHomeButton />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={searchQuery}
              placeholder="Search by title, author, or ISBN"
              onChange={setBooksNameInSearchQuery}
            />
          </div>
        </div>
        {/* Search Shelf */}
        <SearchShelf
          searchQuery={searchQuery}
          mergedBooks={mergedBooks}
          setBookToShelf={setBookToShelf}
        />
      </div>
    </>
  );
};

Search.propTypes = {
  setBooksNameInSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setBookToShelf: PropTypes.func.isRequired,
  mergedBooks: PropTypes.array.isRequired,
};
export default Search;
