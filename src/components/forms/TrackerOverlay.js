import React, { useRef } from 'react'
import classes from '../layouts/Overlay.module.css'
import { useNavigate } from 'react-router-dom';

function TrackerOverlay(props) {
    const orderInputRef=useRef();
    const emailInputRef=useRef();
    const navigate=useNavigate();
    const tracker_api='https://ordertracker.free.beeceptor.com/api/orders/track';
    function submitHandler(event){
        event.preventDefault();
            const enteredOrderNumber=orderInputRef.current.value;
            const enteredEmailId=emailInputRef.current.value;
    
            const orderTracking={
                OrderNumber:enteredOrderNumber,
                EmailId:enteredEmailId
            }
            fetch(tracker_api,
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
                <div className={classes.input}>
                    <label htmlFor='Order Number'>Order Number</label><br/>
                    <input type='number' required id='Order Number' ref={orderInputRef}/>
                </div>
                <div className={classes.input}>
                    <label htmlFor='Email'>Email ID</label><br/>
                    <input type='email' required id='Email' ref={emailInputRef}/>
                </div><br/>
                <div>
                    <button className={classes.btn}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TrackerOverlay;
