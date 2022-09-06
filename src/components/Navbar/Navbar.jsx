import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({isDark, setIsDark}) => {

    const handleOnClick = () =>{
        setIsDark(!isDark);
      
      }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/home" className="text-black">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/product" className='text-black'>Product</Link>
                        </li>
                    </ul>

                    <div className={'container-fluid' + (isDark ? 'bg-dark text-white' : 'bg-white text-dark')}>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={handleOnClick} checked={isDark} />
                            <label className="form-check-label" for="flexSwitchCheckChecked">{isDark ? 'Dark' : 'light'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;