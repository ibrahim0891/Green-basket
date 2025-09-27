
import React from 'react';


type ButtonProp = {
    label: string,
    className?: string
}

const Button = ({ label, className }: ButtonProp) => {
    return (
        <button className={`${className} bg-green-500 text-white active:scale-90 transition-all px-6 py-4 rounded-full`}>
            {label}
        </button>
    );
};

export default Button;