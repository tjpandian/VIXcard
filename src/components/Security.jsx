import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function ScubeFeatures() {
  const features = [
    {
      title: "Effortlessly create new profiles",
      icon: "👤",
      img: "src/assets/slider/profile-form.jpg",
    },
    {
      title: "Easily add multiple cards",
      icon: "📇",
      img: "src/assets/slider/multi-card.jpg",
    },
    {
      title: "Seamlessly switch between profiles",
      icon: "🔁",
      img: "src/assets/Step3.png",
    },
    {
      title: "Share card through QR code",
      icon: "🔗",
      img: "src/assets/Step2.png",
    },
    {
      title: "Securely delete your card",
      icon: "🔒",
      img: "src/assets/Step1.png",
    },
    {
      title: "Disable your Card",
      icon: "🚫",
      img: "src/assets/Step3.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#f8f9fb] py-3 px-4 sm:px-10">
      {/* Title */}
      <AnimatedSection animation="fade-left" className="text-center mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Introducing the <br />
          <span className="text-gray-900">
            updated{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500">
              VIXcard
            </span>{" "}
            App
          </span>
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Enhanced safety, security and control.
        </p>
      </div></AnimatedSection>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Buttons */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-xl p-5 flex flex-col items-start justify-center h-26 cursor-pointer transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-gradient-to-br from-teal-500 to-purple-700 text-white shadow-lg scale-105"
                  : "bg-white shadow-sm text-gray-900 hover:scale-105"
              }`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm font-medium text-start">{item.title}</p>
            </button>
          ))}
        </div>

        {/* Right Phone Image */}
        <div className="col-span-1 flex justify-center mt-10 lg:mt-0">
          {/* 👇 Force re-render when index changes */}
          <AnimatedSection
            key={activeIndex}
            animation="rotate-left"
          >
            <img
              src={features[activeIndex].img}
              alt="VIXcardApp Feature"
              className="w-64 sm:w-72 md:w-80 transition-all duration-500 ease-in-out"
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
