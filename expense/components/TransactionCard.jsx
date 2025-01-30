import React from 'react'

function TransactionCard(props) {
    //destructring
    const{title,amount}=props;
    const colorchange=amount>=0?'positive':'negative'
    const deleteTxn=()=>{
      props.removeFromList(props.index)
    }
  return (<>
  <div className={`transaction-card  ${colorchange}`}>
  <span>{title}</span>
  <span>${amount}</span>
  <div className='btn-container'>
    <button onClick={deleteTxn}>Delete</button></div>
    </div></>
    
  )
}

export default TransactionCard