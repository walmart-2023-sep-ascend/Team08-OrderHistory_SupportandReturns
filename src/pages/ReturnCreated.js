import { Link, useLocation } from "react-router-dom";
import Card from "../components/layouts/Cards";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import classes from '../components/forms/TicketCreation.module.css'

function ReturnCreated() {
    const location=useLocation()
    const {state} =location
    console.log(location)
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Returns Creation</h3>
            <Card>
                <p>Return id</p>
                <p>Refund will be credited in two days</p>
                <p>Refund for order# has been initiated successfully</p>
                <br />
                <br />
                <br />
                <Link to='/help-center'> Back to Help center</Link>
            </Card>
            <Footer />
        </div>
    )
}
export default ReturnCreated;