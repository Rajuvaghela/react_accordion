import React, { useState } from 'react'

export const FAQ = ({ curData, onToggle, isActive }) => {
    const { question, answer,id } = curData;


    const handleButtonClick = () => {
        setIsActive(!isActive);
    }

    return (
        <li >
            <div className='accordion-grid'>
                <p>{question}</p>
                <button
                    className={isActive ? 'active-btn' : ''}
                    onClick={ () =>onToggle(id)} >{isActive ? 'Close' : 'Show'}
                </button>

            </div>
            <p>{isActive && answer}</p>
        </li>
    )
}

