import "./css/App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll, update } from "./utils/BooksAPI";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import useHookQuery from "./hook/useHookQuery";

function App() {
  //  importing all functions from the BooksAPI 
  const [booksData, setBooksData] = useState([]);
  //  variable to handle Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBookQuery] = useHookQuery(searchQuery);
  // creating variables to add property shelf to the new selected book to the shelf
  const [mergedBooks, setMergedBooks] = useState([]);
  const [mapOfIdBooks, setMapOfIdBooks] = useState(new Map());
  //  async func to grab the data from the Api
  const getAllBooksData = async () => {
    await getAll().then((res) => {
      setBooksData(res);
      setMapOfIdBooks(createMapOfBooks(res));
    });
  };

  const createMapOfBooks = (books) => {
    const map = new Map();
    books.map((book) => map.set(book.id, book));
    return map;
  };

  //  importing update func  from bookAPI and call getAllBooksData to update the state
  const setBookToShelf = async (book, shelf) => {
    await update(book, shelf);
    getAllBooksData();
  };

  const setBooksNameInSearchQuery = (e) => {
    let inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  //  create new map of books to get the new data updated
  
  useEffect(() => {
    const combiningBooksShelf = searchBookQuery.map((book) => {
      if (mapOfIdBooks.has(book.id)) {
        return mapOfIdBooks.get(book.id);
      } else {
        return book;
      }
    });
    setMergedBooks(combiningBooksShelf);
  }, [searchBookQuery]);


  // useEffect to render in the first time app run and this is the lifecycle
  useEffect(() => {
    getAllBooksData();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              mergedBooks={mergedBooks}
              searchQuery={searchQuery}
              setBooksNameInSearchQuery={setBooksNameInSearchQuery}
              setBookToShelf={setBookToShelf}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home booksData={booksData} setBookToShelf={setBookToShelf} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
