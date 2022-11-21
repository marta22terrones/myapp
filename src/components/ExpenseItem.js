/*
    * Los componentes siempre comienzan por letra mayúscula
*/ 

import React  from 'react';
import './ExpenseItem.css';

// * Función con mismo nombre que componente, recibe props 
function ExpenseItem(props) {   
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

// * Se exporta componente para poder usarlo en index.js 
export default ExpenseItem;

