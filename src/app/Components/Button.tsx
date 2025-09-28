
import React from 'react';


type ButtonProp = {
    children? :  React.JSX.Element  | unknown ; 
    label: string,
    className?: string
}

const Button = ({ children , label, className }: ButtonProp) => {
    return (
        <button className={`${className} bg-green-500 text-white active:scale-90 transition-all px-6 py-4 rounded-full`}>
            {label}
            {children}
        </button>
    );
};

export default Button;