import React from 'react';
import {MdDelete} from 'react-icons/md';
import {MdDeleteForever} from 'react-icons/md';

import Item from './ExpenseItem';

const ExpenseList = ({expenses}) => {
 return (
  <>
   <ul className='list'>
    {expenses.map((item) => (
     <Item item={item} key={item.id} />
    ))}
   </ul>
   {expenses.length > 0 && (
    <button className='btn'>
     Usuń wszystkie
     <MdDelete className='btn-icon' />
    </button>
   )}
  </>
 );
};

export default ExpenseList;
