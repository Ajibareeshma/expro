import React from 'react'

function IncExpenseCotainer(props) {
    const {transactions}=props
    let income=0
    let expense=0
    transactions.forEach((txn)=> {
        if(txn.amount>=0){
            income+=txn.amount
        }
        else{
            expense+=txn.amount
        }
    });
  return (
    <>
     <div><h3>Your Balance:</h3>
    <h1>${income+expense}</h1></div>
    <div className='inc-exp-container'>
        <div><h3>Income</h3>
        <div>${income}</div>
    </div>
    <div className='separator'/>
    <div>
        <h3>Expense</h3>
        <div>${expense}</div>
    </div>
    </div>
    </>
  )
}

export default IncExpenseCotainer