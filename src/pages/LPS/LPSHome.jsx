import About from "./LPSlayout/About";
import Hero from "./LPSlayout/Hero";
import LPSNavbar from "./LPSNavbar";
import TopBar from "./LPSTopbar";

const LPSHome = () => {
    return (
        <div>
            <TopBar />
            <LPSNavbar />
            <Hero />
            <About />
        </div>
    );
};

export default LPSHome;
