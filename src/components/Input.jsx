import React from 'react';
import { useState } from 'react';
import './input.css';

export default function Input(props) {
    const { label, onChange, id, errorMsg, ...others } = props;
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(true)
    };

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input
                {...others}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    others.name === "confirmPassword" && setFocus(true)
                }
                focus={focus.toString()}
            />
            <span>{focus ? errorMsg : ""}</span>
        </div>
    )
}
