import TicketCreationForm from "../components/forms/TicketCreationForm";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
function SupportTicket() {
    return (
        <div>
            <Header />
            <h1>Support Ticket Creation</h1>
            <TicketCreationForm />
            <Footer />
        </div>
    )
}
export default SupportTicket;