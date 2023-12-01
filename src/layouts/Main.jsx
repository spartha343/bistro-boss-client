import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import NavBar from '../pages/shared/navbar/NavBar';

const Main = () => {
    const location = useLocation();
    const isLogInOrSignUpPage = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            {isLogInOrSignUpPage || <NavBar></NavBar>}
            <Outlet></Outlet>
            {isLogInOrSignUpPage || <Footer></Footer>}
        </div>
    );
};

export default Main;