import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const cardtitle = [
  {
    id: 1,
    tag: "VIXcard Tap",
    title: "Tap & Connect Instantly",
    subtitle:
      "Any NFC-enabled smartphone, and your information is instantly transferred",
    button: "Booking",
    bg: "bg-gradient-to-r from-pink-500 to-purple-500",
    img: "src/assets/slider/tab-cardimage.png", // replace with your img
    href: "/Contact",
  },
  {
    id: 2,
    tag: "QR code",
    title: "Scan & Save Instantly",
    subtitle:
      "Phone’s camera and instantly access your contact details, website, or portfolio.",
    button: "Try now",
    bg: "bg-gradient-to-r from-purple-500 to-orange-500",
    img: "src/assets/slider/card-QR.png",
    href: "/NFCdetail",
  },
];

export default function CardSlider() {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  // Auto slide
  useEffect(() => {
    const next = () => setActive((prev) => (prev + 1) % cardtitle.length);
    timeoutRef.current = setInterval(next, 6000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  return (
    <div className="w-full">
      <div className="home-section mx-auto sm:px-6 lg:px-8">
        <div className="relative overflow-hidden max-w-3xl mx-auto p-8">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {cardtitle.map((s) => (
              <div
                key={s.id}
                className={`w-full flex-shrink-0 rounded-2xl ${s.bg} p-6 flex items-center justify-between`}
              >
                {/* Left text */}
                <div className="flex-1 text-white pr-4">
                  <p className="text-sm font-semibold opacity-90">{s.tag}</p>
                  <h2 className="text-2xl md:text-3xl font-bold leading-snug my-2">
                    {s.title}
                  </h2>
                  <p className="mb-3 text-sm md:text-base">{s.subtitle}</p>

                  <Link to={s.href}>
                    <button className="bg-white text-purple-700 font-semibold py-2 px-5 rounded-full hover:bg-gray-100">
                      {s.button}
                    </button>
                  </Link>
                </div>

                {/* Right image */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-32 md:h-44 rounded-md object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2 p-5">
          {cardtitle.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 rounded-full transition-all ${
                active === i ? "bg-blue-700 w-6" : "bg-gray-300 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
