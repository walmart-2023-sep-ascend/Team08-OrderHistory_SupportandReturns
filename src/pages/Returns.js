import { useNavigate } from "react-router-dom";
import ReturnsForm from "../components/forms/ReturnsForm";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function Returns() {
    const navigate = useNavigate();
    function createReturnsHandler(returns) {
        fetch(
            'https://mp87bd3d06bf4334e796.free.beeceptor.com/api/returns',
            {
                method: 'POST',
                body: JSON.stringify(returns),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then((response) => response.json)
            .then(() => {
                navigate('/return-submission', { replace: true })
            });
    }
    return (
        <div>
                <Header />
                <h1>Returns Processing</h1>
                <ReturnsForm onCreateReturns={createReturnsHandler} />
                <Footer />
        </div>
    )
}

export default Returns;