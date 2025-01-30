import TransactionCard from "../components/TransactionCard";
import { useState } from "react";
const TransactionList =(props)=>{
    
    return(
        <>
        <h4>Transactions </h4>
        <hr/>
        {props.transactions.map((txn,index)=>{
        
        return (<TransactionCard key={index} index={index}title={txn.title}  amount ={txn.amount} removeFromList={props.removeFromList}/>)

        })}
        </>
      
    )
}

export default TransactionList