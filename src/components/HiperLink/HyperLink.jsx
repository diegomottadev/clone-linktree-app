import React from 'react';
import './HyperLink.css'

const HyperLink = () => (
    <div className="links">
        <a className="link" href="https://diegomotta.dev" target="_blank" rel="noopener noreferrer">
            <i className="fab fas fa-briefcase">&nbsp;</i>Web 
        </a>
       
        <a className="link" href="https://www.linkedin.com/in/diegoivanmotta/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin">&nbsp;</i>Linkedin 
        </a>
    
        <a className="link" href="https://github.com/diegomottadev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github">&nbsp;</i>Github
        </a>
        <a className="link" href="https://docs.google.com/forms/d/1fv3ikXJz9HDjEzX0c5KW1SkoLyyY1nrbB4Ma5IQ5vMo/edit" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-inbox">&nbsp;</i> A challenge for me?
        </a>
        <a className="link" href="https://wa.me/+5493743474282/?text=¡Hola Diego!,¿Cómo estás?.%0ATe contacto por ..." target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp">&nbsp;</i> Contact me
        </a>
       
    </div>
 
);

export default HyperLink;