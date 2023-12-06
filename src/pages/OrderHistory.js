import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Card from "../components/layouts/Cards";
import classes from "../components/forms/TicketCreation.module.css"
import TrackerOverlay from "../components/forms/TrackerOverlay"
import Background from "../components/layouts/Backdrop";
import Spinner from "../components/layouts/Spinner";

function OrderHistory() {
    const order_hist_api = 'http://orderhistory-service/order/history/101';
    const [history, setHistory] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(order_hist_api)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                setHistory(data);
            })
            .catch((err) => {
                return err.message;
            })
    }, [])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function trackerHandler() {
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    if (isLoading) {
        return (
            <section>
                <Spinner />
            </section>
        )
    }
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Order History</h3>
            <button className={classes.btnalt} onClick={trackerHandler}>Track your order</button>
            {modalIsOpen && <TrackerOverlay onCancel={closeModalHandler} />}
            {modalIsOpen && <Background onClick={closeModalHandler} />}
            <Card>
                <p>Order Number #{history.orderId}</p>
                <h4>Status : {history.statusOfOrder}</h4>
                <h5>Ordered Date : {history.dateOfOrder.slice(0, 10)}</h5>
                <h5>Delivered Date : {history.dateOfDelivery.slice(0, 10)}</h5>
                <hr />
                {
                    history.products.map((data, id) => (
                        <div key={id}>
                            Item #{data.id} <br />
                            Qty {data.quantity} <br />
                            <hr />
                        </div>
                    ))
                }
                <p>Payment mode : {history.modeOfPayment}</p>
                <h5>Total Amount ${history.amount}</h5>
            </Card>
            <Footer />
        </div>
    )
}
export default OrderHistory;