import './animalList.css'
import './animalList.css'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../../config/firebase/index';
import Footer from '../../../components/Footer';
import bottom_wave from './assets/images/bottom_wave.png'

function AnimalList () {
  const [animals,setanimals] = useState([]);
  const animalsCollectionRef = collection(db,"animals");
  const navigate = useNavigate();
  const navigateToLandingPage = () => {
      navigate('/');
};

  const [filter, setFilter] = useState('');
  const searchText = (event) =>{
    setFilter(event.target.value);
  }
  let dataSearch = animals.filter(item=>{
    
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  });

  class ShowData{
    constructor(collectionRef){
      this.Ref = collectionRef
    }
    async show(){
      this.data = await getDocs(this.Ref)
      setanimals(this.data.docs.map(
        (doc)=>(
          {...doc.data(),id: doc.id}
        )
      ))
    }
  }

  // READ
  useEffect(()=>{
    const getanimals = async()=>{
      const newData = new ShowData(animalsCollectionRef)
      await newData.show()
    }
    getanimals();  
  },[])

  return (
    <>
      <header>
        <a className="logo" onClick={navigateToLandingPage}>
          {" "}
          <i className="fas fa-paw" /> Zootopia
        </a>
        <nav className="navbar">
        </nav>
        <form  >
            <input
              className="search"
              type="text"
              placeholder="Cari Hewan"
              onChange={searchText.bind(this)}
              value={filter}
            />
          </form>
      </header>
      <section className="home1" id="home">
        <img src={bottom_wave}className="wave" />
      </section>
      <section className="data">
        <h2 className="judul">DATA HEWAN</h2>
        <div className="flex-box">
        {dataSearch.map((animal,pos)=>{
         return (
          <div className="card" key={pos} > 
          <img src={animal.img}></img>
            <h2 >{animal.name} </h2>
            <p className="">Scientific Name : {animal.species} </p>          
            <p className="">Class :  {animal.classification} </p>
            <p className="">Food : {animal.food} </p> 
            <p className="">Habitat : {animal.environment} </p>
            <p className="">Characteristics : {animal.description} </p>
          </div>
          )})}  
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AnimalList