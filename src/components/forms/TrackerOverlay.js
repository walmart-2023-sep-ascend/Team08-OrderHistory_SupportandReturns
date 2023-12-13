import React, { useRef, useState } from 'react'
import classes from '../layouts/Overlay.module.css'
import { useNavigate } from 'react-router-dom';
import ErrorModal from '../layouts/ErrorModal';

function TrackerOverlay(props) {
    const orderInputRef=useRef();
    const emailInputRef=useRef();
    const navigate=useNavigate();
    const [error, setError] = useState(null);
    const tracker_api='http://ordertracker-service/track';
    function submitHandler(event){
        event.preventDefault();
            const enteredOrderNumber=orderInputRef.current.value;
            const enteredEmailId=emailInputRef.current.value;
    
            const orderTracking={
                orderNumber:enteredOrderNumber,
                email:enteredEmailId
            }
            fetch(tracker_api,
                {
                    method:'POST',
                    body:JSON.stringify(orderTracking),
                    headers:{
                        'Content-type':'application/json'
                    }
                }
            ).then(response => {
                if(!response.ok){
                    throw Error('Oops!! Something went wrong. Please try again later...')
                }
                return response.json();
            })
            .then(response => {
                navigate('/order-tracker',{state:{replace:true,response:response}})
            }).catch((err)=>{
                setError(err.message);
            }) 
    }
    if(error!=null){
        return(
            <section>
                <ErrorModal/>
            </section>
        )
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
