import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar';
import './landingPage.css'
import { useNavigate } from 'react-router';
import bottom_wave from '/assets/images/botom_wave.png';
import about from '/assets/images/about.png'
import animal_1 from '/assets/images/animal_1.jpg'
import animals_2 from '/assets/images/animals_2.jpg'
import animals_3 from '/assets/images/animals_3.jpg'
import animals_4 from '/assets/images/animals_4.jpg'
import wahana_4 from '/assets/images/wahana_4.jpeg'
import wahana_1 from '/assets/images/wahana_1.jpeg'
import wahana_2 from '/assets/images/wahana_2.jpeg'
import wahana_3 from '/assets/images/wahana_3.jpeg'


function LandingPage () {
  const navigate = useNavigate();
  const navigateToAnimalList = () => {
      navigate('/AnimalList');
};
  return (<>
    <Navbar />
    <section className="home" id="home">
      <div className="content" id="home" >
        <h3 >
          Wild thing! <br />
          Zoo Much Fun!<br /> 
          Zootopia Zoo
        </h3>
        <a href="#about" className="buttons">
          load more
        </a>
      </div>
      <img src={bottom_wave}className="wave "  />
    </section>
    <section className="about" id="about">
      <div className="box-container">
        <div className="image">
          <img src={about}/>
        </div>
        <div className="content">
          <h3 className="title">you can find all the most popular species</h3>
          <p>
          Zootopia zoo is a place that has a variety of animals. 
          Such as lions, elephants, pandas, chameleons, zebras, pandas, cappybara and many others.
          Besides that, Zootopia Zoo has interesting rides so that visitors can have a more interesting time. 
          Zootopia zoo can be a choice of family tourism destinations.
          </p>
          <div className="icons-container">
            <div className="icons">
              <i className="fas fa-graduation-cap" />
              <h3>we educate</h3>
            </div>
            <div className="icons">
              <i className="fas fa-bullhorn" />
              <h3>we play</h3>
            </div>
            <div className="icons">
              <i className="fas fa-book-open" />
              <h3>getting to know</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="hewan" id="animals">
      <h2 className="heading">animals</h2>
      <div className="hewan_box">
        <div className="profile">
          <img src={animal_1} />
          <div className="info">
            <h2 className="name">Lion</h2>
            <p className="bio">
            It has rounded head, round ears, and a hairy tuft at the end of its tail.
            </p>
          </div>
        </div>
        <div className="profile">
          <img src={animals_2} />
          <div className="info">
            <h2 className="name">Zebra</h2>
            <p className="bio">
            It is African equines with distinctive black-and-white striped coats.
            </p>
          </div>
        </div>
        <div className="profile">
          <img src={animals_3} />
          <div className="info">
            <h2 className="name">Panda</h2>
            <p className="bio">
            It is characterised by its bold black-and-white coat and rotund body.
            </p>
          </div>
        </div>
        <div className="profile">
          <img src={animals_4} />
          <div className="info">
            <h2 className="name">Elephant</h2>
            <p className="bio">
            It has distinctly massive bodies, large ears, and long trunks.
            </p>
          </div>
        </div>
      </div>
      <a className="items" onClick={navigateToAnimalList}>
        load more
      </a>
    </div>
    <section className="animals" id="wahana">
      <h2 className="heading">wahana</h2>
      <div className="box-container">
        <div className="box">
          <img src={wahana_1} />
          <div className="content">
            <h3 >Terapi Ikan</h3>
          </div>
        </div>
        <div className="box">
          <img src={wahana_2}/>
          <div className="content">
            <h3 >Speedboat</h3>
          </div>
        </div>
        <div className="box">
          <img src={wahana_3}  />
          <div className="content">
            <h3 >ATV</h3>
          </div>
        </div>
        <div className="box">
          <img src={wahana_4} />
          <div className="content">
            <h3 >Feeding Zoo</h3>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default LandingPage;