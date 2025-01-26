import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Create Context
const searchContext = createContext();

const SearchProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Track the current page
  const [query,setQuery] = useState('');

  // Function to fetch images based on search query and page
  const getPics = async ( pageNumber = 1) => {
    if (!query) return; // Don't make an API call if query is empty

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=0SHF0RPUJJAwH9BwQEjMRpPW777Z0nkWMOTbsyYnlr4&query=${query}`,
        {
          params: {
            per_page: 10, // Limit results to 10 per page
            page: pageNumber, // Pass the current page number
          },
        }
      );

      // Append the new results to the current list of images
      setResult((prevResults) => [...prevResults, ...response.data.results]);

      // Update the page state for pagination
      setPage(pageNumber + 1); // Increment the page number for the next call
    } catch (error) {
      setError("Error fetching images: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Context provider to wrap children with search context
  return (
    <searchContext.Provider value={{ result, setResult,setQuery, getPics, loading, error, page }}>
      {children}
    </searchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SearchProvider, searchContext };
