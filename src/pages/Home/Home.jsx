import { useState, useEffect, React } from 'react'
import Hero from '../../components/LayOut/Hero'
import NewsAndInformation from '../../components/LayOut/NewsAndInformation'
import Visit from '../../components/LayOut/Visit'
import WhyChooseUs from '../../components/LayOut/WhyChooseUs'
import WeHave from '../../components/LayOut/WeHave'
import SummerCourseBanner from "../../components/Banner/SummerCourseBanner";
// import FounderLegacy from '../../components/LayOut/Founder'
import CourseSlider from '../../components/LayOut/CourseSlider'
import AboutUs from '../../components/LayOut/AboutUs'
import EventGallery from '../../components/LayOut/EventGallery'
import EventCarousel from '../../components/LayOut/EventCarousel'
import StudentAndStafDetails from '../../components/LayOut/Student&StafDetails'
import EnquiryNow from '../../components/LayOut/EnquiryNow'

const Home = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(false);

    useEffect(() => {
        // Show the banner when the component mounts
        setIsBannerVisible(false);
    }, []);
    return (
        <>
            <Hero />
            <AboutUs />
            <EnquiryNow/>
            <EventGallery />
            <NewsAndInformation />
            <WhyChooseUs />
            <SummerCourseBanner
                isVisible={isBannerVisible}
                onClose={() => setIsBannerVisible(false)}
            />
        </>

    )
}

export default Home