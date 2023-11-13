import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function MainNavigation() {
    return (
        <div>
            <div></div>
            <Header />
            <nav>
                <ul>
                    <ul>
                        <Link to='/history'>OrderHistory</Link>
                    </ul>
                    <ul>
                        <Link to='/help-center'>Need Help? Click Here</Link>
                    </ul>
                </ul>
            </nav>
            <Footer />
        </div>
    )
}
export default MainNavigation;