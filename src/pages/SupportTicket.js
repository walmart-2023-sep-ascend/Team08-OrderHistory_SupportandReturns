import { useNavigate } from "react-router-dom";
import TicketCreationForm from "../components/forms/TicketCreationForm";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import classes from '../components/forms/TicketCreation.module.css'
import { useState } from "react";
import ErrorModal from "../components/layouts/ErrorModal";
function SupportTicket() {
    const navigate = useNavigate();
    //const supportticket_api='http://34.125.139.203:9701/ticket/create';
    const supportticket_api='https://mp87bd3d06bf4334e796.free.beeceptor.com/api/support-tickets';
    const [error, setError] = useState(null);
    function createTicketHandler(ticket){
        fetch(supportticket_api,
            {
                method: 'POST',
                body: JSON.stringify(ticket),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(response => {
            if(!response.ok){
                throw Error('Oops!! Something went wrong. Please try again later...')
            }
            return response.json();
        })
        .then(response => {
            navigate('/ticket-created', { state: { replace: true, response: response } })
        }).catch(err=>{
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
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Support Ticket Creation</h3>
            <TicketCreationForm onCreateTicket={createTicketHandler} />
            <Footer />
        </div>
    )
}
export default SupportTicket;