import { useNavigate } from "react-router-dom";
import ReturnsForm from "../components/forms/ReturnsForm";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import classes from '../components/forms/TicketCreation.module.css'
function Returns() {
    const returns_api='https://returnsv1.free.beeceptor.com/api/returns';
    const navigate = useNavigate();
    function createReturnsHandler(returns) {
        fetch(returns_api,
            {
                method: 'POST',
                body: JSON.stringify(returns),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((response) => response.json())
        .then((response) => {
                navigate('/return-submission', { state:{replace: true, response: response }})
            }).catch((err) =>{
                return err.message;
            })
    }
    return (
        <div>
            <Header />
            <h3 className={classes.text}>Returns Processing</h3>
            <ReturnsForm onCreateReturns={createReturnsHandler} />
            <Footer />
        </div>
    )
}

export default Returns;