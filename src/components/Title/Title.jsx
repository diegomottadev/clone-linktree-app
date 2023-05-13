import React, { useEffect, useState } from 'react';
import './Title.css'

const Title = () => {
    const [title, setTitle] = useState('Fullstack Web Developer');
    //const [title, setTitle] = useState('Software Developer');

    // useEffect(() => {
        
    //     const intervalId = setInterval(() => {
    //         if (title.trim() === 'Software Developer') {
    //             setTitle('Fullstack Web Developer');
    //         }else if (title.trim() === 'Fullstack Web Developer') {
    //             setTitle('Desarrollador Fullstact Web');
    //         }else {
    //             setTitle('Software Developer');
    //         }
    //     }, 4000);

    //     return () => clearInterval(intervalId);

    // }, [title]);

    return (
    <div className='title'>
        {title}  <img src="images/argentina-flag-wave-icon-16.png" alt={title}/><img src="images/mate.png" width="16" height="16" alt="mate"/> 
    </div>
    );

    };

export default Title;