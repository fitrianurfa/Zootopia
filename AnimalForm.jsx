// import './animalForm.css'
import { useEffect, useState } from 'react';
import { storage } from '../../../config/firebase/index';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { db } from '../../../config/firebase/index';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import { useNavigate} from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../Login/Login';

function AnimalForm () {
  const [animals,setanimals] = useState([]);
  const [newName, setNewName] = useState("");
  const [newSpecies, setNewSpecies] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAmount, setNewAmount] = useState(0)
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "image/");
  const [isUpdate,setIsUpdate] = useState(false)
  const [posEdit, setPosEdit] = useState(null)
  const [search, setSeacrh] = useState("")
  const animalsCollectionRef = collection(db,"animals");
  const [user, setUser] = useAtom(userAtom);

  const navigate = useNavigate();
  const navigateToLandingPage= ()=> {
    navigate('/'); }

  // CREATE
  const createAnimal = async(e)=>{
    e.preventDefault();
    const newDoc = {name: newName,species: newSpecies,description: newDescription,amount: Number(newAmount)}
    await addDoc(animalsCollectionRef, newDoc)
    setanimals([...animals,newDoc])
    setNewName("")
    setNewSpecies("")
    setNewDescription("")
    setNewAmount(0)

    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + id()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // UPDATE
  const updateUser = async(id)=>{
    const animalDoc = doc(db,"animals",id)
    await updateDoc(animalDoc) 
  }

  // DELETE
  const deleteUser = async(id)=>{
    const animalDoc = doc(db,"animals",id)
    await deleteDoc(animalDoc)
    animals.splice(id,1)
    setanimals([...animals])
  }

  // CLASS TO READ THE DATA FROM THE FIRESTORE
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

  const editDoc = async(animal,pos)=>{
    setIsUpdate(true)
    setPosEdit(pos)
    setNewName(animal.name)
    setNewSpecies(animal.species)
    setNewDescription(animal.description)
    setNewAmount(animal.amount)
    const id = animal.id
    localStorage.setItem("AnimalID",id);
  }
  
  const editAnimal = async()=>{
    const id = localStorage.getItem("AnimalID")
    const pos = posEdit
    const animalDoc = doc(db,"animals",id)

    const newDoc = { 
      name: newName,
      species: newSpecies,
      description: newDescription,
      amount: newAmount
    }

    await updateDoc(animalDoc, newDoc);

    const showNewanimals = async()=>{
      animals.splice(pos,1,newDoc);
      setanimals(animals)
      setIsUpdate(false)
      setNewName("")
      setNewSpecies("")
      setNewDescription("")
      setNewAmount(0)
      localStorage.removeItem("UserID");
    }
    showNewanimals()
  }

  // READ
  useEffect(()=>{
    const getanimals = async()=>{
      const newData = new ShowData(animalsCollectionRef)
      await newData.show()
    }
    getanimals();
  })

  //Filter
  // const SearchAnimal =(e)=>{
  //   e.preventDefault();
  //   setanimals(animals.filter((animal)=>
  //   animals.name.ToLowerCase().includes(search.toLowerCase)
  //   ));
  // }

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUser(null);
    alert("Want to Log Out?")
    navigateToLandingPage();
  };

  return (
    <>
      <header className="header">
        <a onClick={navigateToLandingPage} className="logo">
          {" "}
          <i className="fas fa-paw" /> zootopia
        </a>
        <div className="icons">
          <div id="login-btn" className="fas fa-user" onClick={handleLogout}/>
          <div id="menu-btn" className="fas fa-bars" />
        </div>
      </header>
      <section className="contact" id="contact">
        {/* <div>
          <input type="text" onChange={(e)=>{SetSearch(e.target.value)}} />
          <button type="submit" onClick={(e)=>{SearchAnimal(e)}}>search</button>
        </div> */}
        <h2 className="headingList">FORM SUBMIT</h2>
        <form >
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Name</p>
            <input type="text" value={newName} onChange={(event)=>{setNewName(event.target.value)}} placeholder="Name" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Species</p>
            <input type="text" value={newSpecies} onChange={(event)=>{setNewSpecies(event.target.value)}} placeholder="Spesies" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Amount</p>
            <input type="number" value={newAmount} onChange={(event)=>{setNewAmount(event.target.value)}} placeholder="Amount" />
          </div>
          <div>
            <p style={{fontSize:20, textAlign:'left',color:"orange"}}>Description</p>
            <textarea
              cols={30}
              rows={10}
              value={newDescription} onChange={(event)=>{setNewDescription(event.target.value)}}
              placeholder="Description"
              defaultValue={""}
            />
          </div>
          <input className= "btn"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />   <br/><br/>
          {isUpdate ? <button className="btn" onClick={editAnimal}>Update </button> : <button className="btn" onClick={createAnimal}>Submit</button> } 
        </form> 
      </section>
      <section className="tabel">
        <h2 className="heading">TABLE DATA</h2>
        <div className="main">
        <section className="table-container">
            <table>
              <thead>
                <tr>
                  <th> Gambar </th>
                  <th> Nama </th>
                  <th> Deskripsi </th>
                  <th> Jumlah </th>
                  <th> Spesies </th>
                  <th> Action</th>          
                </tr>
              </thead>
              <tbody>
              {animals.map((animal,pos)=>{
              return (
                <tr key={pos} >
                  <td>{imageUrls.map((url) => {
                    return <img src={url} />; })}
                  </td>
                  <td> {animal.name} </td>
                  <td> {animal.description} </td>
                  <td> {animal.amount}</td>
                  <td>{animal.species}</td>
                  <td>
                    <button className="btn btn-primary"  onClick={()=>{editDoc(animal,pos)}} > Edit </button>
                    <button className="btn btn-primary"  onClick={()=>{deleteUser(animal.id)}}> Delete </button>
                  </td>
                </tr>
                )})}
              </tbody>      
            </table>
          </section>
        </div>
      </section>
      <footer className="designed">
        <p>Designed by Fitria Nur Fatmawati.</p>
      </footer>
    </>
  );
}

export default AnimalForm