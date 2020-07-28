import React, {useState} from 'react';
import {v4 as id} from 'uuid';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';

const initialExpenses = [
 {id: id(), charge: 'Wynajem', amount: 1600},
 {id: id(), charge: 'Zakupy', amount: 600},
 {id: id(), charge: 'Rachunki', amount: 477},
];

const App = () => {
 const [expenses, setExpenses] = useState(initialExpenses);

 return (
  <>
   <Alert />
   <h1>Kalkulator wydatków</h1>
   <main className='App'>
    <ExpenseForm />
    <ExpenseList expenses={expenses} />
   </main>
   <h1>
    Suma :{' '}
    <span className='total'>
     {expenses.reduce((acc, curr) => {
      return acc + curr.amount;
     }, 0)}{' '}
     PLN
    </span>
   </h1>
  </>
 );
};

export default App;
