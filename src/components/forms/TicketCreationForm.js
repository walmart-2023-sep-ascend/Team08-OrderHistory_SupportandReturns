import { useRef } from 'react';
import classes from './TicketCreation.module.css'
import Card from '../layouts/Cards';

function TicketCreationForm(props) {
    const orderInputRef = useRef();
    const descriptionInputRef = useRef();
    const imageInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredOrderNumber = orderInputRef.current.value;
        const enteredIssueDescription = descriptionInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const ticketCreation = {
            OrderNumber: enteredOrderNumber,
            IssueDescription: enteredIssueDescription,
            Image: enteredImage
        };
        props.onCreateTicket(ticketCreation);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='Order Number'>Order Number</label>
                    <input type='number' required id='Order Number' ref={orderInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='Description'>Issue Description</label>
                    <input type='text' required id='Description' ref={descriptionInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='Image'>Image</label>
                    <input type='text' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.action}>
                    <button>Create Ticket</button>
                </div>
            </form>
        </Card>
    )
}
export default TicketCreationForm;