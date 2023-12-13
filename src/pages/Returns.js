import { useNavigate } from "react-router-dom";
import ReturnsForm from "../components/forms/ReturnsForm";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import classes from '../components/forms/TicketCreation.module.css'
import { useState } from "react";
import ErrorModal from "../components/layouts/ErrorModal";
function Returns() {
    const returns_api='http://34.125.139.203:9702/returns'
    //const returns_api='https://returnsv1.free.beeceptor.com/api/returns';
    const [error, setError] = useState(null);
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
        ).then(response => {
            if(!response.ok){
                throw Error('Oops!! Something went wrong. Please try again later...')
            }
           return response.json();
        })
        .then(response => {
                navigate('/return-submission', { state:{replace: true, response: response }})
        }).catch(err =>{
                setError(err.message);
            })
    }
    if(error!=null){
        return(
            <section>
                <ErrorModal/>
            </section>
        )
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