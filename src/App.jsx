import { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import Interface from './Components/Interface';



const App = () => {
  const [bgBlack, setBgBlack] = useState(false);
  const interfaceRef = useRef(null); // Ref to access the Interface element directly

  const handleScroll = () => {
    const scrollPosition = interfaceRef.current.scrollTop; // Get scroll position of Interface component
    console.log(scrollPosition);  // Optional: Debug scroll position

    // Check if scroll position is greater than or equal to 400px
    if (scrollPosition >= 400) {
      setBgBlack(true);  // Set background to black if scroll position >= 400px
    } else {
      setBgBlack(false); // Reset background to transparent if scroll position < 400px
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
    <div className="App">
      {/* Pass bgBlack state to Header component */}
      <Header bgBlack={bgBlack} />

      <Interface ref={interfaceRef}/>

    </div>
  );
};

export default App;
