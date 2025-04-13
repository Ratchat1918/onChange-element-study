import React,{useState} from "react";

function OnChangeStudy(){
    const [name,setName]=useState("");
    const [number,setNumber]=useState(0);
    const [payment,setPaymentType]=useState('');
    const [shipping,setShippingType]=useState('');
    function handeleNameChange(event){
        setName(event.target.value);
    }
    function handeleNumberChange(event){
        setNumber(event.target.value);
    }
    function handlePaymentType(event){
        setPaymentType(event.target.value)
    }
    function handleShippmentChange(event){
        setShippingType(event.target.value)
    }
    return (
    <>
    <input type="text" value={name} onChange={handeleNameChange}></input>
    <p>Name: {name}</p>
    <input type="number" value={number} onChange={handeleNumberChange}></input>
    <p>Number:{number}</p>
    <select value={payment} onChange={handlePaymentType}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
    </select>
    <p>Payment type: {payment}</p>
    
    <label>Normal delivery
        <input onChange={handleShippmentChange} value='Normal delivery' checked={shipping==="Normal delivery"} type="radio"></input>
    </label>
    <label>Express delivery
        <input name="express" checked={shipping==="Express delivery"} onChange={handleShippmentChange} value='Express delivery' type="radio"></input>
    </label>
    <p>{shipping}</p>
    </>
    );
};
export default OnChangeStudy;