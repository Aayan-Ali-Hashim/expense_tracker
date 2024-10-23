import React, { useEffect, useState } from "react";
import "./MainPage.css";
const MainPage = () => {
  const [budgetValue, setBudgetValue] = useState(null);
  const [value, setValue] = useState<any | null >(null);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [expenses, setExpenses] = useState<{name:string , cost:number}[]>([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses)); 
    }
  }, []);


  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  useEffect(() =>{
    const savedBudget = localStorage.getItem("budget");
    if (savedBudget) {
      setBudgetValue(JSON.parse(savedBudget)); 
    }

  },[])

useEffect(()=>{
  if (budgetValue !== null && budgetValue > 0) {
    localStorage.setItem("budget", JSON.stringify(budgetValue));
  }
},[budgetValue])
  const handleBudget = (e:React.FormEvent) => {
    e.preventDefault();
    if(value === null){
      setValue(0);
    }
    else{
      setBudgetValue(value)
    }
  };

  const handleExpense = (e:React.FormEvent) => {
    e.preventDefault();
    if (name && cost) {
      setExpenses([...expenses, { name: name, cost: cost }]);
      setCost(0);
      setName("");
    }
  };
  let sum = 0;
  expenses.map((expense) => {
    sum = sum + expense.cost 
  });
let remaining;
  if(budgetValue!== null && budgetValue > sum){
    remaining = budgetValue - sum
  }

  return (
    <div className="main-page">
      <div className="header-container">
        <h1 className="header">Personal Expense Tracker</h1>
        <button className="signout-button">Sign Out</button>
      </div>
      <form className="budget-form" onSubmit={handleBudget}>
        <label>Add/Update Budget</label>
        <input
          className="input-budget"
          type="number"
          placeholder="0"
 
            value={value}

          onChange={(e) => setValue(e.target.value)}
        />
        <button className="save-budget-button" type="submit">
          Save Budget
        </button>
      </form>
      <div className="display-budget">
        <span className="budget">Budget: Rs {budgetValue}</span>
        <span className="remaining">Remaining: Rs {remaining} </span>
        <span className="spent">Spent so far: Rs {sum}</span>
      </div>
      <h1 className="expenses-heading">Expenses</h1>
      {expenses.length > 0 && (
        <ul className="lists">
          {expenses.map((expense, index) => (
            <li key={index} className="myli">
              <div className="li-container">
                <span className="name-text">{expense.name}</span>
                <span className="cost-text">Rs. {expense.cost}</span>
              </div> 
            </li>
          ))}
        </ul>
      )}
      <div className="add-expense-container">
        <h2>Add Expense</h2>
        <div className="expense-form">
          <form onSubmit={handleExpense}>
            <div className="input-container">
              <div className="sub-container">
                <label>Name</label>
                <input
                  type="text"
                  className="input-box"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="sub-container cost-container">
                <label>Cost</label>
                <input
                  type="number"
                  className="input-box"
                  value={cost}
                  onChange={(e) => setCost(parseInt(e.target.value))}
                />
              </div>
            </div>
            <button className="save-expense-button" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
