

import {LineWobble} from 'ldrs/react'
import 'ldrs/react/LineWobble.css'
 
const Loader = () => {
    return (
        <div className='contianer-center flex items-center justify-center w-full aspect-square md:aspect-video '>
            
            <LineWobble
                size="100"
                stroke="5"
                bgOpacity="0.1"
                speed="1.50"
                color="green"
            />
        </div>
    );
};

export default Loader;