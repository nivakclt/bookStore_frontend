
import './App.css'
import {Route,Routes} from 'react-router-dom'

import Auth from './pages/Auth'
import Home from './pages/Home'

import Books from './User/pages/Books'
import BookDetails from './User/pages/BookDetails'
import Contact from './User/pages/Contact'
import Profile from './User/pages/Profile'

import Dashboard from './Admin/pages/Dashboard'
import Resources from './Admin/pages/Resources'
import Settings from './Admin/pages/Settings'

import Pnf from './pages/Pnf'
import About from './pages/About'

import PaymentFailed from './User/pages/PaymentFailed'
import PaymentSuccess from './User/pages/PaymentSuccess'

function App() {
  

  return (
    <>
    <Routes>
      {/* common */}
      <Route path='' element={<Home/>}/>
      <Route path='auth' element={<Auth/>}/>

      {/* user */}
      <Route path='books' element={<Books/>}/>
      <Route path='book/:bid' element={<BookDetails/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path="/about" element={<About />} />

      {/* admin */}
      <Route path='admin' element={<Dashboard/>}/>
      <Route path='admin/resources' element={<Resources/>}/>
      <Route path='admin/settings' element={<Settings/>}/>

      <Route path='success' element={<PaymentSuccess/>}/>
      <Route path='failed' element={<PaymentFailed/>}/>


      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
