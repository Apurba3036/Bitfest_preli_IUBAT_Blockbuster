
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Mainlayout = () => {
    return (
        <div>
     <div className='h-16'>
        <Navbar />
      </div>
           <div className='min-h-screen'>
           <Outlet></Outlet>
           </div>
        <div className=' '>

            <Footer></Footer>
           </div>
        </div>
    );
};

export default Mainlayout;