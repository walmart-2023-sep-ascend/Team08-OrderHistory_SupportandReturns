import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Cards";
import classes from "../forms/TicketCreation.module.css"

function HelpCenterNavigation() {
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Help Center</h3>
            <ul>
                <ul>
                    <div>
                        <Card>
                            <Link to='/support-ticket'>Create Support Ticket</Link>
                        </Card>
                    </div>
                </ul><br /><br />
                <ul>
                    <div>
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