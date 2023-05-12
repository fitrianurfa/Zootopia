import React from 'react'
import ReactDOM from 'react-dom/client'
import firebase from './config/firebase'
import App from './containers/pages/App/App'


console.log('config firebase ====>',firebase)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
