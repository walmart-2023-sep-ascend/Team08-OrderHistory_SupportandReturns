import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Cards";
import Returns from "../../pages/Returns";

function HelpCenterNavigation() {
    return (
        <div>
            <Header />
            <ul>
                <ul>
                    <div>
                        <div className="logo">
                            <img src={Returns} alt="Walmart Logo" width="75" height="75" /> {/* Adjust width and height as needed */}
                        </div>
                        <Card>
                            <Link to='/support-ticket'>Create Support Ticket</Link>
                        </Card>
                    </div>
                </ul><br /><br />
                <ul>
                    <div className="card-container">
                        <div className="logo">
                            <img src={Returns} alt="Returns" width="75" height="75" /> {/* Adjust width and height as needed */}
                        </div>
                        <Card>
                            <Link to='/returns'>Return Product</Link>
                        </Card>
                    </div>
                </ul><br /><br />
                <ul>
                    <Card>
                        <Link to='/support-chat'>Support Chat</Link>
                    </Card>
                </ul> <br /><br />
                <ul>
                    <Card>
                        <Link to='/tollfree'>Toll Free Number</Link>
                    </Card>
                </ul> <br />
            </ul>
            <Footer />
        </div>
    )
}
export default HelpCenterNavigation;