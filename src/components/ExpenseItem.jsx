import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md';
const ExpenseItem = ({item}) => {
 const {id, charge, amount} = item;
 return (
  <li className='item'>
   <div className='info'>
    <span className='expense'>{charge}</span>
    <span className='amount'>{amount} PLN</span>
   </div>
   <button className='edit-btn' aria-label='edit-button'>
    <MdEdit />
   </button>
   <button className='clear-btn' aria-label='delete-button'>
    <MdDelete />
   </button>
  </li>
 );
};

export default ExpenseItem;
