import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import HomeScreen from './pages/HomeScreen';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

  


function App() {


  const [isDark, setIsDark] = useState(false);

 

  

  return (
    <>
    
  <Navbar isDark={isDark}
          setIsDark={setIsDark}/>

<Routes>
  <Route path = "/home" element={<HomeScreen/>} />
  <Route path = "/" element={<HomeScreen/>} />
  
</Routes>


      
      
      
      
  


    </>
  );
}

export default App;
