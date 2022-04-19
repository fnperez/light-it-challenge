import React from 'react';
import './SubmitButton.css';

const SubmitButton = ({onSubmit, sending, label}) => (
    <button 
        className={`button ${sending ? ' button--sending' : 'button--primary'}`}
        disabled={sending}
        onClick={onSubmit}
    >
        {label}
    </button>
)

export default SubmitButton;