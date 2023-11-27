import { Route, Routes } from 'react-router-dom'
import OrderHistory from './pages/OrderHistory';
import HelpCenter from './pages/Helpcenter';
import SupportTicket from './pages/SupportTicket';
import Returns from './pages/Returns';
import Chat from './pages/Chat';
import TollFree from './pages/TollFree';
import MainNavigation from './components/layouts/MainNavigation';
import ReturnCreated from './pages/ReturnCreated';
import TicketCreated from './pages/TicketCreated';
import OrderTracker from './pages/OrderTracker';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<MainNavigation />}></Route>
        <Route path='/history' exact element={<OrderHistory />}>Order History Home</Route>
        <Route path='/order-tracker' exact element={<OrderTracker/>}>Order Tracker</Route>
        <Route path='/help-center' element={<HelpCenter />}>Help center</Route>
        <Route path='/support-ticket' element={<SupportTicket />}>Support Ticket creation</Route>
        <Route path='/returns' element={<Returns />}>Returns creation</Route>
        <Route path='/return-submission' element={<ReturnCreated />}>Returns Submitted</Route>
        <Route path='/ticket-created' element={<TicketCreated/>}>Support Ticket Created</Route>
        <Route path='/support-chat' element={<Chat />}>Support Chat</Route>
        <Route path='/tollfree' element={<TollFree />}>Toll Free</Route>
      </Routes>
    </div>
  );
}

export default App;