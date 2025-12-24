import { Outlet } from 'react-router-dom';
import LpsNavbar from '../LPSNavbar';
import LPSFooter from '../LPSFooter';
import LpsTopBar from '../LPSTopbar';

const LpsLayOut = () => {
    return (
        <div>
            <header>
                <LpsTopBar />
                <LpsNavbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <LPSFooter />
            </footer>
        </div>
    );
};
export default LpsLayOut
