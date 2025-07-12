
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header'

function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    <footer>this is a footer</footer>
    </>
  )
}

export default App
