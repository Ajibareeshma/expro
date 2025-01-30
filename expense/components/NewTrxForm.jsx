import { useState } from "react"


const NewTrxForm = (props)=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState()

   const addTransaction=(e)=>{
    e.preventDefault()
    if(title === ' '|| amount === ' '){
      alert("Please fill this field");
      return;
    }
    props.addToList(title,amount)
    setTitle('')
     setAmount('')
    console.log("added transaction",e)
   }
const handleTitleChange=(e) => {
    setTitle(e.target.value)
}
const handleAmountChange=(e) => {
    setAmount(+e.target.value)
}
console.log(title)
console.log(amount)


    return(

    <>
    <h4>Add new transaction</h4><hr/>
    <form>
    <div className="form-group">
        <label className="title">Title</label>
        <input type="text" id ="title" value ={title} onChange={handleTitleChange}/>
    </div>
    <div className="form-group">
        <label htmlfor="amount">Amount</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange}/>
    </div>
    <button onClick={addTransaction}>Add Transaction</button>
    </form>

    </>        
    )
}
export default NewTrxForm;