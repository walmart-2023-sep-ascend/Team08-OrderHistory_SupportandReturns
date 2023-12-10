import React, { useState } from 'react'
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer'
import { Link, useLocation } from 'react-router-dom';
import Card from '../components/layouts/Cards';
import classes from '../components/forms/TicketCreation.module.css'

function OrderTracker() {
  const location = useLocation()
  const { state } = location
  const { response } = state
  const [ordertracker, setOrderTracker] = useState(response)
  return (
    <div>
      <Header />
      <h3 className={classes.text}>Order Tracker</h3>
      <div>
        <Card>
          <h4>Order Number : {ordertracker.orderNumber}</h4>
          <h4>Status : {ordertracker.status}</h4>
          {
            ordertracker.trackingDetails.map(order => {
              return (
                <ul>
                  <li>{order.status} - {order.location}</li>
                  <ul>{order.timestamp}</ul>
                </ul>
              )
            })
          }
          <Link to='/history'> Back to Order History</Link>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default OrderTracker;
