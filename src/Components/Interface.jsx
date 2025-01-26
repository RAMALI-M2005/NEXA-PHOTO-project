
import { forwardRef } from "react";
import Main from "../Components/Main/Main.jsx";
import Footer from '../Components/Footer/Footer.jsx';
import Pictures from "../Components/PicturesHolder/Pictures.jsx";

const Interface = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Interface">
    <Main/>
    <Pictures/>
    <Footer/>
    </div>
  );
});

export default Interface;

