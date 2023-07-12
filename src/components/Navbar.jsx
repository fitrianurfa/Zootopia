import { useNavigate } from "react-router";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Navbar () {
  const navigate = useNavigate();
  const navigateToLandingPage = () => {
      navigate('/');}
  const navigateToLogin= () => {
      navigate('/login'); }
  return(
    <header className=".header">
    <a className="logo" onClick={navigateToLandingPage }>
      {" "}
      <FontAwesomeIcon icon={faPaw} style={{color: "#ff7300",}} size="xl"/> Zootopia
    </a>
    <nav className="navbar">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#animals">ANIMALS</a>
      <a href="#wahana">WAHANA</a>
    </nav>
    <div className="icons">
      <div  />
      <FontAwesomeIcon icon={faUser} size="l" id="loginbtn" onClick={navigateToLogin} />
    </div>
  </header>
  )
}

export default Navbar
