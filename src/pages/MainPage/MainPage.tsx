import React, { useEffect, useState } from "react";
import "./MainPage.css";
const MainPage = () => {
  const [budgetValue, setBudgetValue] = useState<number | null > (null);
  const [value, setValue] = useState<number | null >(null);
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

      setValue(null)
    }
    else{
      setBudgetValue(value)
      setValue(null)

    }
  };

  const handleExpense = (e:React.FormEvent) => {
    e.preventDefault();
    if (name && cost) {
      setExpenses([...expenses, { name: name, cost: cost }]);
      setCost(0);
      setName("");
      if(budgetValue !== null && sum >= budgetValue){
        alert("Expenses Exceeded your Budget")
    
      }
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
  else{
    remaining = 0
  }

const handleSignOut = (e) => {
  e.preventDefault()
  localStorage.setItem("login", "false")
  location.reload()
}
const handleListClear = (e) => {
  e.preventDefault()
  localStorage.removeItem("expenses")
  location.reload()
}

  return (
    <div className="main-page">
      <div className="header-container">
        <h1 className="header">Personal Expense Tracker</h1>
        <button className="signout-button" onClick={handleSignOut}>Sign Out</button>
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
      <div className="expenses-container">
      <h1 className="expenses-heading">Expenses</h1>
      <button className="save-budget-button clear-expenses-button" onClick={handleListClear}>Clear Expenses</button>

      </div>
      {expenses.length > 0 ? (
        <ul className="lists">
          {expenses.map((expense, index) => (
            <li key={expense.id} className="myli">
              <div className="li-container">
                <span className="name-text">{expense.name}</span>
                <span className="cost-text">Rs. {expense.cost}</span>
              </div> 
            </li>
          ))}
        </ul>
      ): (<div>No items found</div>)}
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
