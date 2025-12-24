import { HiArrowRight } from "react-icons/hi";

export default function SummerCourseBanner() {
  return (
    <div className="relative w-full text-white py-12 px-6 md:px-12 lg:px-24 text-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://cdn.pixabay.com/photo/2022/08/30/20/47/institute-7421918_1280.jpg')", 
          filter: "brightness(40%)"
        }}
      ></div>
      <div className="relative z-10 p-6 rounded-lg">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Lambodar Higher Secondary of Science</h1>
        <h2 className="text-xl md:text-3xl font-semibold">Summer Course 2025 - Enroll Now!</h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Join our exclusive summer courses to enhance your knowledge and skills. Limited seats available!
        </p>
        <div className="flex justify-center mt-6">
          <button className="flex items-center px-6 py-3 text-white border-2 border-white group hover:bg-pink-600">
            View Work
            <span className="duration-300 group-hover:rotate-90"> 
              <HiArrowRight className="ml-3"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
