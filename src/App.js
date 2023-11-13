import { Route, Routes } from 'react-router-dom'
import OrderHistory from './pages/OrderHistory';
import HelpCenter from './pages/Helpcenter';
import SupportTicket from './pages/SupportTicket';
import Returns from './pages/Returns';
import Chat from './pages/Chat';
import TollFree from './pages/TollFree';
import MainNavigation from './components/layouts/MainNavigation';
import ReturnCreated from './pages/ReturnCreated';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<MainNavigation />}></Route>
        <Route path='/history' exact element={<OrderHistory />}>Order History Home</Route>
        <Route path='/help-center' element={<HelpCenter />}>Help center</Route>
        <Route path='/support-ticket' element={<SupportTicket />}>Support Ticket creation</Route>
        <Route path='/returns' element={<Returns />}>Returns creation</Route>
        <Route path='/return-submission' element={<ReturnCreated />}>Returns Submitted</Route>
        <Route path='/support-chat' element={<Chat />}>Support Chat and Toll Free</Route>
        <Route path='/tollfree' element={<TollFree />}>Support Chat and Toll Free</Route>
      </Routes>
    </div>
  );
}

export default App;