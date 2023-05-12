import { useNavigate } from "react-router";
import './navbar.css'



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
      <i className="fas fa-paw" /> Zootopia
    </a>
    <nav className="navbar">
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#animals">ANIMALS</a>
      <a href="#wahana">WAHANA</a>
    </nav>
    <div className="icons">
      <div id="loginbtn" className="fas fa-user" onClick={navigateToLogin} />
    </div>
  </header>
  )
}

export default Navbar