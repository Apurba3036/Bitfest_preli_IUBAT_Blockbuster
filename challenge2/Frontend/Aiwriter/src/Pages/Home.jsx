import Banner from "../Components/Banner";
import wave from "../assets/wave.svg";

const Home = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Banner */}
            <img className="absolute w-full h-50  object-cover" src={wave} alt="wave pattern" />
            <div className="relative">
                <Banner />
            </div>
            {/* Wave SVG positioned below the banner with negative margin */}
        </div>
    );
};

export default Home;
