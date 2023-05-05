import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/pages/App/App.jsx'
import './index.css'
import firebase from './config/firebase'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './containers/pages/LandingPage/index.jsx'
import TableAnimals from './containers/pages/TableAnimals/TableAnimals.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/TableAnimals",
    element: <TableAnimals />,
  },
]);

console.log('config firebase ====>',firebase)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
