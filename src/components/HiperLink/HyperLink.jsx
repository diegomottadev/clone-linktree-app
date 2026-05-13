import React from 'react';
import './HyperLink.css'
import { Link, useNavigate } from "react-router-dom";

const HyperLink = ({ onHyperlink }) => {
    const {content_0, content_1,content_2,content_3,content_4,content_5} = onHyperlink

    const parsed_text_content_0 = content_0.split(/\n\s*/);

    const navigate = useNavigate();

    const onClickResult = (event) => {
        event.preventDefault()
        navigate("/results")
    }

    return(
    <div className="links">
       
        <a className="link" href="https://github.com/diegomottadev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github">&nbsp;</i>Github
        </a>
        <a className="link" href="https://medium.com/@diegomottadev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium">&nbsp;</i>Medium
        </a>
        <a className="link" href="https://www.linkedin.com/in/diegoivanmotta/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin">&nbsp;</i>Linkedin 
        </a>
        <a className="link" href="https://twitter.com/diegomottadev" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" style={{width:'1em',height:'1em',fill:'currentColor',marginRight:'6px',verticalAlign:'-0.125em'}} aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>{content_4}
        </a>
       
        <Link className="link" onClick={(e)=>onClickResult (e)}>
            <i className="fa fa-trophy">&nbsp;</i>{content_1}
        </Link>    
        <a className="link" href="https://wa.me/+5493743474282/?text=¡Hola Diego!,¿Cómo estás?.%0ATe contacto por ..." target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp">&nbsp;</i> {content_5} 
        </a>
        {/* <a className="link" href="https://docs.google.com/forms/d/1fv3ikXJz9HDjEzX0c5KW1SkoLyyY1nrbB4Ma5IQ5vMo/edit" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-inbox">&nbsp;</i> {content_4} 
        </a> */}
    </div>
 
);
}
export default HyperLink;