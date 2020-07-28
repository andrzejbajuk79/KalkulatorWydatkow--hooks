import React from 'react';
import {v4 as id} from 'uuid';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const initialExpenses = [
 {id: id(), charge: 'Wynajem', kwota: 1600},
 {id: id(), charge: 'Zakupy', kwota: 600},
 {id: id(), charge: 'Rachunki', kwota: 477},
];
console.log(initialExpenses);
function App() {
 return (
  <>
   <Alert />
   <ExpenseForm />
   <ExpenseList expenses={initialExpenses} />
  </>
 );
}

export default App;
