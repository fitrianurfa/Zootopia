

function Footer () {
  return(
    <footer>
      <div className="box-container">
        <div className="box">
          <h3>
            <i className="fas fa-paw" /> zoo
          </h3>
          <p >Zoo Open Schedule</p>
          <p className="links" >
            <i className="fas fa-clock" />
            Tuesday - Sunday
          </p>
          <p className="days">8:00AM - 11:00PM</p>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="#" className="links">
            <i className="fas fa-phone" /> 1245-147-2589
          </a>
          <a  href="#" className="links">
            <i className="fas fa-envelope" /> information@zootopia.com
          </a>
          <a  href="#" className="links">
            <i className="fas fa-map-marker-alt" /> boyolali, indonesia
          </a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#" className="links">
            {" "}
            <i className="fas fa-arrow-right" />
            home
          </a>
          <a  href="#" className="links">
            {" "}
            <i className="fas fa-arrow-right" />
            about
          </a>
          <a  href="#" className="links">
            {" "}
            <i className="fas fa-arrow-right" />
            animals
          </a>
        </div>
        <div className="box">
          <h3>Social Media</h3>
          <div className="share">
            <a href="#" className="fab fa-facebook-f" />
            <a href="#" className="fab fa-twitter" />
            <a href="#" className="fab fa-instagram" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer