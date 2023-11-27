import { useNavigate } from "react-router-dom";
import TicketCreationForm from "../components/forms/TicketCreationForm";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import classes from '../components/forms/TicketCreation.module.css'
function SupportTicket() {
    const navigate = useNavigate();
    function createTicketHandler(ticket) {
        fetch(
            'https://mp87bd3d06bf4334e796.free.beeceptor.com/api/support-tickets',
            {
                method: 'POST',
                body: JSON.stringify(ticket),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((response) => response.json())
        .then((response) => {
            navigate('/ticket-created', { state: { replace: true, response: response } })
        })     .catch((err)=>{
            return err.message;
        })
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