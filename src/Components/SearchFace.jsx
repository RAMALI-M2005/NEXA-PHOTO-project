
import { useEffect, useRef, useState } from 'react';
import Header from './Header/Header';
import Helper from './SearchHelper/Helper';


const SearchFace = () => {
    const [bgBlack, setBgBlack] = useState(false);
      const interfaceRef = useRef(null); // Ref to access the Interface element directly
    
      const handleScroll = () => {
        const scrollPosition = interfaceRef.current.scrollTop; // Get scroll position of Interface component
        console.log(scrollPosition);  // Optional: Debug scroll position
    
        // Check if scroll position is greater than or equal to 70px
        if (scrollPosition >= 70) {
          setBgBlack(true);  // Set background to black if scroll position >= 70px
        } else {
          setBgBlack(false); // Reset background to transparent if scroll position < 70px
        }
      };
    
      useEffect(() => {
        const interfaceElement = interfaceRef.current;
    
        // Attach scroll event listener to the Interface element
        interfaceElement.addEventListener("scroll", handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          interfaceElement.removeEventListener("scroll", handleScroll);
        };
      }, []);
      return (
        <div className="SearchFace">
          {/* Pass bgBlack state to Header component */}
          <Header bgBlack={bgBlack} />
    
          <Helper ref={interfaceRef}/>
    
        </div>
      );
};

export default SearchFace;