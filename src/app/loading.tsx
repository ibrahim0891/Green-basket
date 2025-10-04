

import {LineWobble} from 'ldrs/react'
import 'ldrs/react/LineWobble.css'
 
const Loader = () => {
    return (
        <div className='contianer-center flex items-center justify-center w-full h-screen'>
            
            <LineWobble
                size="80"
                stroke="5"
                bgOpacity="0.1"
                speed="1.75"
                color="black"
            />
        </div>
    );
};

export default Loader;