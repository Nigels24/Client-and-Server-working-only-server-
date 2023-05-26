import { useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

  function Navbar() {
  const navRef =  useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  } 
    
  return (
    <div>
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a  href="/#">Home</a>
          <a  href="/#">About</a>
          <a  href="/#">Contact</a>
          <a  href="/#">History</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar }>
            <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
     </div>
  );
}


export default Navbar;