import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import HomeScreen from './pages/HomeScreen';




function App() {


  const [isDark, setIsDark] = useState(false);

  const handleOnClick = () =>{
    setIsDark(!isDark);
  
  }

  

  return (
    <>
    <div className={'container-fluid ' + (isDark ?'bg-dark text-white': 'bg-white text-dark')}>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={handleOnClick} checked={isDark}/>
  <label class="form-check-label" for="flexSwitchCheckChecked">{isDark?'Dark':'light'}</label>
  </div>
      <HomeScreen />
      <ContactForm />
      </div>
      
      
      

      




    </>
  );
}

export default App;
