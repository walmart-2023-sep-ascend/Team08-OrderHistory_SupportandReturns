import { Link } from "react-router-dom";
import Card from "../components/layouts/Cards";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function ReturnCreated(props) {
    const returnid = props.returnid
    const order_num = props.order_num
    return (
        <div>
            <Header />
            <Card>
                <h1>Returns Creation</h1>
                <p>Return id{returnid}</p>
                <p>Refund will be credited in two days</p>
                <p>Refund for order#{order_num} has been initiated successfully</p>
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