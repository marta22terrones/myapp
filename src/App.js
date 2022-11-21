import logo from './logo.svg';
import './App.css';
import React  from 'react';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expense = [
    { id: 1, date: new Date(2021, 2, 28), title: 'Car Insurance', amount: 294.67 }, 
    { id: 2, date: new Date(2021, 2, 28), title: 'Toilet Paper', amount: 16.37 }, 
    { id: 3, date: new Date(2021, 2, 28), title: 'Smart TV', amount: 895.55 }, 
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ExpenseItem 
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
