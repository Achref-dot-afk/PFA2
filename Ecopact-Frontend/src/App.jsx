import 'normalize.css';
import {Routes,Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboards/Dashboard';
import ShowUser from './pages/ShowUser';
import DeleteUser from './pages/DeleteUser';
import UpdateUser from './pages/UpdateUser';
import './index.css'
import { ToastContainer } from "react-toastify";
import {useSelector} from 'react-redux'

//<Route path='*' element={<NotFound />} />
function App() {
  const user=useSelector(state => state.auth.user);  
  return (
    
      <>
        
        <ToastContainer theme="colored" position="top-center" />
        <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/Register' element={ <Register/>} />
        <Route path='/Login' element={!user ? <Login/> : <Navigate to="/Dashboard" /> }/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Dashboard' element={<Dashboard/>} ></Route>
        <Route path={`/users/details/:id`} element={<ShowUser/>} ></Route>
        <Route path={`/users/delete/:id`} element={<DeleteUser/>} ></Route>
        <Route path={`/users/edit/:id`} element={<UpdateUser/>} ></Route>
        
      </Routes>
      </>
      
    
  )
}

export default App
