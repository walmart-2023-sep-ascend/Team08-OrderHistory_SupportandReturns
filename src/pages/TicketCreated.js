import { Link, useLocation } from "react-router-dom";
import Card from "../components/layouts/Cards";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import classes from '../components/forms/TicketCreation.module.css'
import { useEffect, useState } from "react";

function TicketCreated() {
    const location = useLocation()
    const {state} = location
    const {response} = state
    const [ticketDetails , setTicketdetails] = useState(response)
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Support Ticket Creation</h3>
            <Card>
                <p>Ticket id #{ticketDetails.ticketId}</p>
                <p>Your support ticket has been created successfully. We will address your issue shortly</p>
                <br />
                <br />
                <br />
                <Link to='/help-center'> Back to Help center</Link>
            </Card>
            <Footer />
        </div>
    )
}
export default TicketCreated;