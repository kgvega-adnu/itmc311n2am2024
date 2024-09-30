import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./BrowseSearchbar.css";

export const BrowseSearchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  //fetch data from database -- remove jsonplaceholder link or the entire fetch function
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        //filter on backend
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="Search-wrapper">
       <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Project Name, Keyword, or Proponent"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      {/* Di pa connected tong button when clicked */}
      <button>Search</button>

    </div>
   
  );
};


export default BrowseSearchbar;


// Searchbar YT Link - frontend siya nag fetch using API
// https://www.youtube.com/watch?v=sWVgMcz8Q44