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
       
        <a className="link" href="https://diegomotta.dev" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-globe">&nbsp;</i>{content_3} 
        </a>

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
            <i className="fab fa-twitter">&nbsp;</i> {content_4}
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
        <a className="link" href="https://diegomotta.dev/dev-101/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-book">&nbsp;</i>{parsed_text_content_0[0]}<br></br>{parsed_text_content_0[1]} 
        </a>  
       
    </div>
 
);
}
export default HyperLink;