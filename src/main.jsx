import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { Route,createBrowserRouter, RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'

// const router = createBrowserRouter ([
//   {
//     path: '/',
//     element: <Layout />,
//     childern:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} />
      <Route path='login' element={<Login />} />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
