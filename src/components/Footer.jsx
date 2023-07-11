import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

function Footer () {
  return(
    <footer>
      <div className="box-container">
        <div className="box">
          <h3>
          <FontAwesomeIcon icon={faPaw} style={{color: "#ff7300",}} /> zoo
          </h3>
          <p >Zoo Open Schedule</p>
          <p className="links" >
          <FontAwesomeIcon icon={faClock} style={{color: "#ff7300",}} /> Tuesday - Sunday
          </p>
          <p className="days">8:00AM - 11:00PM</p>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="#" className="links">
          <FontAwesomeIcon icon={faPhoneAlt} style={{color: "#ff7300",}} /> 1245-147-2589
          </a>
          <a href="#" className="links">
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ff7300",}} /> information@zootopia.com
          </a>
          <a href="#" className="links">
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{color: "#ff7300",}} /> boyolali, indonesia
          </a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#home" className="links">
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ff7300",}} />
            home
          </a>
          <a  href="#about" className="links">
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ff7300",}} />
            about
          </a>
          <a  href="#animals" className="links">
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#ff7300",}} />
            animals
          </a>
        </div>
        <div className="box">
          <h3>Social Media</h3>
          <div className="share">
            <a href="#" >
            <FontAwesomeIcon icon={faFacebook} style={{color: "#ffff"}} size="2x"/>
             </a>
            <a href="#" >
            <FontAwesomeIcon icon={faTwitter} style={{color: "#ffff",}} size="2x" /> 
            </a>
            <a href="#" >
            <FontAwesomeIcon icon={faInstagram} style={{color: "#ffff",}} size="2x"/>
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
