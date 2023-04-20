import React, { useEffect, useState } from 'react';
import './Subtitle.css'

const Subtitle = () => {

    const [subtitle, setsubtitle] = useState('#React.js #Javascrip #TypeScript');

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            if (subtitle.trim() === '#Node.js #Express.js #MongoDB') {
                setsubtitle('#React.js #Javascrip #TypeScript');
            }else if (subtitle.trim() === '#React.js #Javascrip #TypeScript') {
                setsubtitle('#PHP #Laravel #MySql');
            }else if (subtitle.trim() === '#PHP #Laravel #MySql') {
                setsubtitle('#AWS #Docker #DigitalOceon #Git');
            }else {
                setsubtitle('#Node.js #Express.js #MongoDB');
            }
        }, 2000);

        return () => clearInterval(intervalId);

    }, [subtitle]);

    return (
    <div className='subtitle'>
        {subtitle}
    </div>
    );

    };

export default Subtitle;