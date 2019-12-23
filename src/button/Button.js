import React from 'react';
import './Button.css';

const Button = ({ newClassName, btnName }) => {
    return (
        <>
            <button type="button" className={`Btn ${newClassName}`} >{btnName}</button>
        </>
    )
}

export default Button;