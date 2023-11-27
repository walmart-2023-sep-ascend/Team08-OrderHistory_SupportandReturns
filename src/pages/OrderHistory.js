import { useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Card from "../components/layouts/Cards";
import classes from "../components/forms/TicketCreation.module.css"
import TrackerOverlay from "../components/forms/TrackerOverlay";
import Backdrop from "../components/layouts/Backdrop";

function OrderHistory() {
    const [history, setHistory] = useState([]);
    const [query,setQuery]=useState("");
    useEffect(() => {
        fetch('https://history.free.beeceptor.com/orders/history?userId=12345')
            .then((response) => response.json())
            .then((data) => {
                setHistory(data.orders);
            })
            .catch((err) => {
                return err.message;
            })
    }, [])
    const [modalIsOpen,setModalIsOpen]=useState(false);
    function trackerHandler(){
        setModalIsOpen(true);
    } 
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Order History</h3>
            <input className={classes.search} type="search" placeholder="Search..." onChange={(e)=>setQuery(e.target.value)}/><br></br>
            <button className={classes.btnalt} onClick={trackerHandler}>Track your order</button>
            {modalIsOpen && <TrackerOverlay onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
            {
                history.filter((order)=>order.orderNumber.includes(query)).map((order, id) => {
                    return (
                        <Card>
                            <ul>
                                <div key={id}>
                                    <p>Order Number #{order.orderNumber}</p>
                                    <h4>Status : {order.status}</h4>
                                    <h5>Ordered Date : {order.orderDate}</h5>
                                    {order.items.map(data => (
                                        <div key={id}>
                                            Item #{data.itemName} <br />
                                            Qty {data.quantity}<br />
                                            Unit Price ${data.unitPrice}
                                            <hr />
                                        </div>
                                    ))}
                                    <h4>Total Amount ${order.totalAmount}</h4>
                                </div>
                            </ul>
                        </Card>
                    )
                })
            }
            <Footer />
        </div>
    )
}
export default OrderHistory;