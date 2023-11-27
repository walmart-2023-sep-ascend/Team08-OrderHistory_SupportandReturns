import React, { useRef } from 'react'
import classes from '../layouts/Overlay.module.css'
import { useNavigate } from 'react-router-dom';

function TrackerOverlay(props) {
    const orderInputRef=useRef();
    const emailInputRef=useRef();
    const navigate=useNavigate();
    function submitHandler(event){
        event.preventDefault();
            const enteredOrderNumber=orderInputRef.current.value;
            const enteredEmailId=emailInputRef.current.value;
    
            const orderTracking={
                OrderNumber:enteredOrderNumber,
                EmailId:enteredEmailId
            }
            fetch(
                'https://ordertracker.free.beeceptor.com/api/orders/track',
                {
                    method:'POST',
                    body:JSON.stringify(orderTracking),
                    headers:{
                        'Content-type':'application/json'
                    }
                }
            ).then((response) => response.json())
            .then((response) => {
                navigate('/order-tracker',{state:{replace:true,response:response}})
            }).catch((err)=>{
                return err.message;
            }) 
    }
    return(
        <div className={classes.modal}>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='Order Number'>Order Number</label>
                    <input type='number' required id='Order Number' ref={orderInputRef}/>
                </div>
                <div>
                    <label htmlFor='Email'>Email</label>
                    <input type='text' required id='Email' ref={emailInputRef}/>
                </div>
                <div>
                    <button className={classes.btn}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TrackerOverlay;
