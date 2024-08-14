import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Myaccount from './Components/Myaccount'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route >
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/myacc' element={<Myaccount />}></Route>
      </Route>
    </>
  ))
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
