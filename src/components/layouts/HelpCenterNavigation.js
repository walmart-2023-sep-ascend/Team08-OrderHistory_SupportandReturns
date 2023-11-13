import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function HelpCenterNavigation() {
    return (
        <div>
            <Header />
                <ul>
                    <ul>
                        <Link to='/support-ticket'>Create Support Ticket</Link>
                    </ul><br /><br />
                    <ul>
                        <Link to='/returns'>Return Product</Link>
                    </ul><br /><br />
                    <ul>
                        <Link to='/support-chat'>Support Chat</Link>
                    </ul> <br /><br />
                    <ul>
                        <Link to='/tollfree'>Toll Free Number</Link>
                    </ul> <br />
                </ul>
            <Footer />
        </div>
    )
}
export default HelpCenterNavigation;