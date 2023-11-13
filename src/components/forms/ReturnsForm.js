import { useRef } from 'react';
import classes from './TicketCreation.module.css'
import Card from '../layouts/Cards';

function ReturnsForm(props) {
    const orderInputRef = useRef();
    const reasonInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredOrderNumber = orderInputRef.current.value;
        const enteredReason = reasonInputRef.current.value;

        const returns = {
            OrderNumber: enteredOrderNumber,
            Reason: enteredReason,
        };
        props.onCreateReturns(returns);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='Order Number'>Order Number</label>
                    <input type='number' required id='Order Number' ref={orderInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='Reason'>Reason</label>
                    <input type='text' required id='Reason' ref={reasonInputRef} />
                </div>
                <div className={classes.action}>
                    <button>Initiate Returns</button>
                </div>
            </form>
        </Card>
    )
}
export default ReturnsForm;