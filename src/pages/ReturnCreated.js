import { Link, useLocation } from "react-router-dom";
import Card from "../components/layouts/Cards";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import classes from '../components/forms/TicketCreation.module.css'
import { useLayoutEffect, useState } from "react";
import Spinner from "../components/layouts/Spinner";

function ReturnCreated() {
    const location=useLocation()
    const {state} =location
    const {response}=state
    const [returns,setReturns]=useState(response);
    useLayoutEffect(()=>{
        <Spinner/>
    },[])
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Returns Creation</h3>
            <Card>
                <p>Return id {returns.returnId}</p>
                <p>{returns.refundStatus}</p>
                <p>{returns.message}</p>
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