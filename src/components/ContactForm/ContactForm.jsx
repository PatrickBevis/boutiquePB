import React from 'react';
import { CgProfile } from "react-icons/cg";
import {BsEnvelope, BsFillChatRightTextFill, BsPencilFill} from 'react-icons/bs';

const ContactForm = () => {
    return (
        <>
            <div clas="container-fluid ">
                <div className="row  bg-black mt-5">
                    <h3 className='d-flex justify-content-center text-white mt-3'>Contactez-nous !</h3>
                    <div className="col ">
                        <form className="mt-5">

                            
                            <div className='d-flex align-items-center'>  <span className='me-2'><CgProfile size={30} color='white' /></span><input type="text" className="form-control mb-2" id='text' placeholder="Prénom et nom" /></div>
                            <div className='d-flex align-items-center'>  <span className='me-2'><BsEnvelope size={30} color='white' /></span><input type="email" className="form-control mb-2" id='mail' placeholder="name@example.com" /></div>
                            <div className='d-flex align-items-center'>  <span className='me-2'><BsFillChatRightTextFill size={30} color='white' /></span><textarea className="form-control mb-2" id="text-area" rows='2' placeholder="tapez un truc"></textarea></div>
                            

                        </form>
                    </div>
                    <div className="col d-flex align-items-center ">
                        
                    <span className='me-2'><BsPencilFill size={50} color='white' /></span>   <textarea className="form-control mb-2" id="text-area" rows='4' placeholder="tapez un truc"></textarea>
                        
                    </div>
                    <div className='d-flex justify-content-end p-3'><button type="submit" className="btn btn-primary ">Envoyer</button></div>
                </div>
            </div>

        </>
    );
};

export default ContactForm;