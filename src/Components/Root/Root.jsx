import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';


const Root = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <main>
                <Home></Home>
            </main>

        
        
            <main>
                <Outlet></Outlet>

            </main>
            <footer>
                <Footer></Footer>

            </footer>

        </div>
    );
};

export default Root;