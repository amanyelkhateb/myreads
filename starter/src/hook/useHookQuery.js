import { useState, useEffect } from "react";
import { search } from "../utils/BooksAPI";
import { useDebounce } from "use-debounce";

const useHookQuery = (searchQuery) => {
  const [searchBookQuery, setSearchBookQuery] = useState([]);
  // Use useDebounce to continue entring valid search query until last character
  const [valueSearch] = useDebounce(searchQuery, 500);
  // function to keep track for search input val
  useEffect(() => {
    let isActive = true;
    if (valueSearch) {
      search(valueSearch).then((data) => {
        if (data.error) {
          console.log('Error DATA check your entry');
          setSearchBookQuery([]);
        } else {
          console.log('Corrected DATA check your entry= ' + valueSearch);
          if (isActive) {
            setSearchBookQuery(data);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearchBookQuery([]);
    };
  }, [valueSearch]);
  return [searchBookQuery, setSearchBookQuery];
};

export default useHookQuery;
