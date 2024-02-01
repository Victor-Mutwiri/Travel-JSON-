
import './App.css'
import Home from './components/home/home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import City from './components/city/city'
import Expeditions from './components/expeditions/expeditions'
import Packages from './components/packages/packages'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


export default function App() {

  return (
    <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {<Route path='/city' element={<City/>}/>}
            <Route path='/expeditions' element={<Expeditions/>}/>
            <Route path='/packages' element={<Packages/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
      </Router>
  )
}

