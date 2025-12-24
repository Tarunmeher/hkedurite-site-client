import TillotammaNavbar from "./TillotammaNavbar";

const TillotammaHome = () => {
    return (
        <div>
            <TillotammaNavbar />
            <div className="p-6 text-center">
                <h1 className="text-3xl font-bold">Welcome to Tillotamma</h1>
                <p className="mt-4 text-lg text-gray-600">Explore the world of learning with us!</p>
            </div>
        </div>
    );
};

export default TillotammaHome;
