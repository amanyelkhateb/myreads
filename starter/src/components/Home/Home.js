import React from "react";
import Shelf from "./Shelf/Shelf";
import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// Component to handle the search button
const GoToSearchButton = () => {
  return (
    <div className="open-search">
      <Link to="/search">Add new book</Link>
    </div>
  );
}

const Home = ({ booksData, setBookToShelf }) => {
  return (
    <>
      <Helmet>
        <title>Udacity Nanodegree MyReads Project</title>
        <link rel="canonical" href="/" />
        <meta
          name="description"
          content="react js (navigation happens without the need to refresh pages), MyReads lets you manage your digital bookshelf"
        />
      </Helmet>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* shelves */}
            <Shelf
              setBookToShelf={setBookToShelf}
              booksData={booksData}
              titleName="Currently Reading"
              shelf="currentlyReading"
            />
            <Shelf
              setBookToShelf={setBookToShelf}
              booksData={booksData}
              titleName="Want To Read"
              shelf="wantToRead"
            />
            <Shelf
              setBookToShelf={setBookToShelf}
              booksData={booksData}
              titleName="Read"
              shelf="read"
            />
          </div>
        </div>
        <GoToSearchButton />
      </div>
    </>
  );
};
Home.propTypes = {
  booksData: PropTypes.array.isRequired,
  setBookToShelf: PropTypes.func.isRequired,
};

export default Home;
