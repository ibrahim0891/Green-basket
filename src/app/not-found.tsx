/* eslint-disable @next/next/no-img-element */

import Button from "./Components/Button";

 
const NotFound = () => {
    return (
        <div className='container-center flex space-y-8 h-full flex-col items-center justify-center my-20'>
            <img src="/not-found.png" alt="not found image" />
            <h1 className="text-5xl font-semibold">Oops! page not found</h1>
            <p className="text-gray-500"> Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas sagittis tortor at metus mollis </p>
            <Button label="Back to Home"></Button>
        </div>
    );
};

export default NotFound;