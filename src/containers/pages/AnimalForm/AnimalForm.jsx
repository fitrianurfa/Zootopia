import './animalForm.css'
import { useEffect, useState } from 'react';
import { storage } from '../../../config/firebase/index';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { db } from '../../../config/firebase/index';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc,  onSnapshot} from "firebase/firestore";
import { useNavigate} from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtom } from '../Login/Login';

function AnimalForm () {
  const [animals,setanimals] = useState([]);
  const [newName, setNewName] = useState("");
  const [newSpecies, setNewSpecies] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newClassification, setNewClassification] = useState("");
  const [newEnvironment, setNewEnvironment] = useState("");
  const [newFood, setNewFood] = useState("");
  const [newAmount, setNewAmount] = useState(0)
  const [isUpdate,setIsUpdate] = useState(false)
  const [posEdit, setPosEdit] = useState(null)
  const animalsCollectionRef = collection(db,"animals");
  const [user, setUser] = useAtom(userAtom);
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);

  const navigate = useNavigate();
  const navigateToLandingPage= ()=> {
    navigate('/'); }

    useEffect(() => {
      const unsub = onSnapshot(
        collection(db, "animals"),
        (snapShot) => {
          let list = [];
          snapShot.docs.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
          });
          setData(list);
        },
        (error) => {
          console.log(error);
        }
      );
  
      return () => {
        unsub();
      };
    }, []);
  
    // CREATE
    const createAnimal = async(e)=>{
      e.preventDefault();
      
      const newDoc = {img:(URL.createObjectURL(file)),name: newName,species: newSpecies, classification: newClassification, environment: newEnvironment, food: newFood ,description: newDescription,amount: Number(newAmount)}
      await addDoc(animalsCollectionRef, newDoc);
      
      setanimals([...animals,newDoc])
      setNewName("")
      setNewSpecies("")
      setNewClassification("")
      setNewEnvironment("")
      setNewFood("")
      setNewDescription("")
      setNewAmount(0)
      setFile("")
      alert("Submit Succesfull")
      }

    
    useEffect(() => {
      const uploadFile = () => {
        const name = new Date().getTime() + file.name; 22
        console.log(name);
        const storageRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPerc(progress);
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          
          (error) => {
            console.log(error);
          },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prev) => ({ ...prev, img: downloadURL }));
          console.log("downloadURL")
        });
      }
        );
      };
      file && uploadFile();
    }, []);
  

    // DELETE
    const deleteAnimal = async(id)=>{
      const animalDoc = doc(db,"animals",id)
      await deleteDoc(animalDoc)
      animals.splice(id,1)
      setanimals([...animals])
      alert("Delete Succesfull")
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
      setNewClassification(animal.classification)
      setNewEnvironment (animal.environment)
      setNewFood(animal.food)
      setNewDescription(animal.description)
      setNewAmount(animal.amount)
      setFile(animal.img)
      const id = animal.id
      localStorage.setItem("AnimalID",id);
    }
    
    const editAnimal = async(e)=>{
      e.preventDefault();
      const id = localStorage.getItem("AnimalID")
      const pos = posEdit
      const animalDoc = doc(db,"animals",id)

      const newDoc = { 
        name: newName,
        species: newSpecies,
        classification: newClassification,
        environment: newEnvironment,
        food: newFood,
        description: newDescription,
        amount: newAmount,
        img : URL.createObjectURL(file)
      }
  
      await updateDoc(animalDoc, newDoc);
  
      const showNewanimals = async()=>{
        animals.splice(pos,1,newDoc);
        setanimals(animals)
        setIsUpdate(false)
        setNewName("")
        setNewSpecies("")
        setNewClassification("")
        setNewEnvironment("")
        setNewFood("")
        setNewDescription("")
        setNewAmount(0)
        setFile("")
        localStorage.removeItem("UserID");
      }
      showNewanimals()
      alert("Update Succesfull")
    }
  
    // READ
    useEffect(()=>{
      const getanimals = async()=>{
        const newData = new ShowData(animalsCollectionRef)
        await newData.show()
      }
      getanimals();  
    },[])
  

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
          <div id="login-btn1" className="fas fa-user" onClick={handleLogout}/>
          <div id="menu-btn1" className="fas fa-bars" />
        </div>
      </header>
      <section className="contact" id="contact">
        <h2 className="headingList">FORM SUBMIT</h2>
        <form >
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Name</p>
            <input type="text" value={newName} onChange={(event)=>{setNewName(event.target.value)}} placeholder="Name" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Scientific Name</p>
            <input type="text" value={newSpecies} onChange={(event)=>{setNewSpecies(event.target.value)}} placeholder="Scientific Name" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Class</p>
            <input type="text" value={newClassification} onChange={(event)=>{setNewClassification(event.target.value)}} placeholder="Class" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Food</p>
            <input type="text" value={newFood} onChange={(event)=>{setNewFood(event.target.value)}} placeholder="Food" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Habitat</p>
            <input type="text" value={newEnvironment} onChange={(event)=>{setNewEnvironment(event.target.value)}} placeholder="Habitat" />
          </div>
          <div className="inputBox">
            <p style={{fontSize:20,color:"orange"}}>Amount</p>
            <input type="number" value={newAmount} onChange={(event)=>{setNewAmount(event.target.value)}} placeholder="Amount" />
          </div>
          <div>
            <p style={{fontSize:20, textAlign:'left',color:"orange"}}>Characteristic Body</p>
            <textarea
              cols={30}
              rows={10}
              value={newDescription} onChange={(event)=>{setNewDescription(event.target.value)}}
              placeholder="Characteristic Body"
              defaultValue={""}
              maxLength={120}
            />
          </div>
          <input className= "btn"
              type="file"
              onChange={(e) => 
                setFile(e.target.files[0])}
            />   <br/><br/>
          {isUpdate ? <button className="btn1" onClick={editAnimal}>Update </button> : 
          <button className="btn" onClick={createAnimal}>Submit</button> }          
        </form> 
      </section>
      <section className="tabel">
        <h2 className="heading">TABLE DATA</h2>
        <div className="main1" >
        <section className="table-container">
        <table class="table">
          <thead>
            <tr>
              <th> Picture </th>
              <th> Name </th>
              <th> Scientific Name </th>
              <th> Class </th>
              <th> Food </th>
              <th> Habitat </th>
              <th> Amount </th>
              <th> Characteristic Body </th>
              <th> Action</th>    
            </tr>
          </thead>
          <tbody>
          {animals.map((animal,pos)=>{
              return (
                <tr key={pos} >
                  <td><img src={animal.img}/></td>
                  <td> {animal.name} </td>
                  <td>{animal.species}</td>
                  <td> {animal.classification}</td>
                  <td>{animal.food}</td>
                  <td> {animal.environment} </td>
                  <td> {animal.amount}</td>
                  <td> {animal.description} </td>
                  <td>
                    <button className="btn1 btn-primary"  onClick={()=>{editDoc(animal,pos)}} > Edit </button>
                    <button className="btn1 btn-primary"  onClick={()=>{deleteAnimal(animal.id)}}> Delete </button>
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