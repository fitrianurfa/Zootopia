import React, {useState} from 'react';
import './login.css'
import 'material-symbols'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { useAtom, atom } from 'jotai';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

export const userAtom = atom(localStorage.getItem('userEmail') ?? null);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useAtom(userAtom);
  
  const navigate = useNavigate();
  const navigateToAnimalForm = ()=> {
    navigate('/AnimalForm'); }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      setUser(userCredential.user.email.toLowerCase());
      localStorage.setItem('userEmail', userCredential.user.email.toLowerCase());
      const user = userCredential.user.email.toLowerCase();
      console.log(userCredential);   
      console.log(user);
      alert("login succes")
      navigateToAnimalForm()
    }).catch((error)=> {
      console.log(error)
      alert("login failed")
    })
  }

useEffect(()=>{
},[]);


  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src="src/assets/images/logo.png" alt="logo" className="image"/>
        </div>
        <div className="login-card-header">
          <h1>Login</h1>
          <div>for Admin Only</div>
        </div>
        <form onSubmit={handleSubmit} className="login-card-form">
          <div className="form-item">
            <span>person</span>
            <input
              type="text"
              placeholder="Masukkan Username"
              id="emailForm"
              autofocus=""
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-item">
            <span >lock</span>
            <input
              type="password"
              placeholder="Masukkan Password"
              id="passwordForm"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}

            />
            <button type='submit'>login</button>
          </div>        
        </form>
      </div>
    </div>
    
    
  )

}



export default Login;
