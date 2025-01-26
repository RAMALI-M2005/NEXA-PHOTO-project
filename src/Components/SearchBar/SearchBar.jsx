import { Search } from "@mui/icons-material";
import { useContext, useState } from "react";
import "./SearchBar.css";
import { searchContext } from "../searchContent";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the query
  const { getPics, setResult,setQuery } = useContext(searchContext); // Access getPics and setResult from context

  // Handle change in input
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle when user presses "Enter"
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      // Call the getPics function from context to fetch images
      setResult([]); // Clear previous results
      setQuery(searchQuery);
      await getPics(1); // Fetch results for the first page of the query
    }
  };

  return (
    <div className="SearchBar">
      <Search className="iconSearch" />
      <input
        type="text"
        value={searchQuery} // Bind input value to state
        onChange={handleInputChange} // Update state on input change
        onKeyDown={handleKeyDown} // Listen for "Enter" key press
        placeholder="Search a photo"
      />
    </div>
  );
};

export default SearchBar;
