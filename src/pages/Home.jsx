import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Atom } from 'lucide-react';


import { 
  Search, 
  Target, 
  Megaphone, 
  Code, 
  Users, 
  Award,
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

import Bradslide from '../components/Bradslide';

import Header from '../components/Header';

const services = [
     {
    imgStatic: "src/assets/PVC-Cards.webp",
    imgGif: "src/assets/card-tab.gif",
    title: "VIXcard PVC Business Cards",
    description: "Starts From ₹ 999.00",
  },
  {
    imgStatic: "src/assets/Metal-Cards.webp",
    imgGif: "src/assets/card-tab.gif",
    title: "VIXcard Metal Business Cards",
    description: "Starts From ₹ 3999.00",
  },
  {
    imgStatic: "src/assets/Pops-card.jpg",
    imgGif: "src/assets/card-tab.gif",
    title: "VIXcard Pops",
    description: "Starts From ₹ 699.00",
  },
];


const processes = [
  {
    title: 'Strategy',
    description: 'We analyze your market, competitors, and audience to create a winning digital strategy.'
  },
  {
    title: 'Execution',
    description: 'Our expert team brings your strategy to life with precision and creativity.'
  },
  {
    title: 'Analysis',
    description: 'We continuously monitor, measure, and optimize for maximum performance.'
  }
];


const testimonials = [
  {
    name: 'Suresh Kumar',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'The digital card made my networking super easy. Just a single tap and my details are shared instantly. My clients love it!'
  },
  {
    name: 'Ananya Sharma',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'I don’t carry paper cards anymore. This NFC card is modern, eco-friendly, and always makes a great first impression.'
  },
  {
    name: 'Priya Nair',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'Very professional design and smooth to use. It saves time, reduces cost, and helps me stay connected anywhere.'
  }
];

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProcess, setCurrentProcess] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProcess((prev) => (prev + 1) % processes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

    const contact_card = [
   
    {
      title: "Personal & Business Info",
      img: "assets/image/tex.jpg",    
      desc1: "Your Name",
      desc2: "Job Title / Position",
      desc3: "Company Name & Logo",
      desc4: "Mobile Number (tap-to-call button)",
    },
    {
      title: "Smart Links & Online Presence",
      img: "assets/image/dress.gif",
       desc1: "Website / Portfolio link",
      desc2: "Office Address (tap-to-open Google Maps)",
    
      desc4: "Social Media (LinkedIn, Instagram, Facebook, Twitter/X, YouTube)",
    },
    {
      title: "Payments (Instant Business Convenience)",
      img: "assets/image/tech.gif",
       desc1: "UPI ID / QR Code (Google Pay, PhonePe, Paytm)",
      desc2: "PayPal / Stripe link (for international clients)",
      desc3: "Bank Transfer details (if needed)",
     
    },
  ];



  return (
    <body className="overflow-hidden">

       
      <Bradslide/>

      {/* Hero Section */}
     <Header />

      {/* About Section */}
      <section className="p-4 bg-white">      
       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="scroll-left" delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-6">
               Smart Business Cards  Designed to Impress.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <div className="flex flex-row gap-5 mb-3 text-black  hover:text-purple-500 transition-colors">
                   <Atom size={24} />
                  Instant Sharing
                </div>
                 <div className="flex flex-row gap-5 mb-3 text-black  hover:text-purple-500 transition-colors">
                   <Atom size={24} />
                  Customizable Design
                </div>
                 <div className="flex flex-row gap-5 mb-3 text-black  hover:text-purple-500 transition-colors">
                   <Atom size={24} />
                  Cross-Platform
                </div>
                 <div className="flex flex-row gap-5 mb-3 text-black  hover:text-purple-500 transition-colors">
                   <Atom size={24} />
                  Secure & Editable
                </div>
             
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
              
               Introducing the NFC Smart Business Card: Customised designs, superior printing quality, and material, with a two-year replacement guarantee at no extra cost.
              </p>
               <div className="flex flex-row gap-4 mt-8 justify-center lg:justify-start">
         <a href="NFCdetail">  <button className=" text-black px-6 py-3 rounded-md font-semibold btn-2">
           Explore Cards
          </button></a>
          <a href="Work"><button className="border btn-2 text-black px-6 py-3 rounded-md font-semibold">
            How it Works
          </button></a>
        </div>
            </AnimatedSection>
            
            <AnimatedSection animation="scale" delay={300}>
              <div className="bg-white rounded-2xl shadow-xl p-8  transition-transform duration-300">
                <img
                  src="src/assets/card-tab.gif"
                  alt="Company Founder"
                  className="w-full  object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold font-['Poppins'] text-black mb-2">
                  A smart way to connect
                </h3>
               
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

       
       

      {/* Services Preview Section */}
      <section className="py-5 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection animation="fade-up" delay={300} className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-4 ">
       <span class="px-3 text-base md:text-4xl">Multiple</span>  
        <span className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
            Options
          </span>
         <span class="px-3 text-base md:text-4xl">Available</span>  
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        For all professions
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <AnimatedSection
          key={service.title}
          animation="fade-up"
          delay={300}
        >
          <Link
            
            className="group block bg-white rounded-xl overflow-hidden border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative"
          >
            {/* Static Image */}
            <img
              src={service.imgStatic}
              alt={service.title}
              className="w-full h-60 object-cover group-hover:hidden"
            />
            {/* GIF on Hover */}
            
            <img
              src={service.imgGif}
              alt={service.title}
              className="w-full h-60 object-cover hidden group-hover:block"
            />
         
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
              <h3 className="text-lg font-bold font-['Poppins']">{service.title}</h3>
              <p className="text-sm group-hover:mb-3">{service.description}</p>
              <button
             
              alt={service.title}
              className="btn-2 text-white object-cover hidden group-hover:block px-6 py-3 "
              >View Card</button>
            </div>
          </Link>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>
                 


      <section id="contact_card" className="product-section py-5 bg-gray-50 bg-fixed">
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="pt-3 text-2xl md:text-3xl font-bold text-white">
          Contact Details
        </span>
      
      </div>

      {/* Carousel / Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6 p-5 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-10 md:overflow-visible">
          {contact_card.map((s, i) => (
            <div
              key={i}
              className="min-w-[85%] md:min-w-0 bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col  gap-4 snap-center"
            >
              {/* <img
                src={s.img}              
                className="w-1/2 object-contain rounded-lg"
              /> */}
              <h3 className="text-xl text-center font-semibold">{s.title}</h3>
              <p className="text-gray-600 font-bold text-sm md:text-base">{s.desc1}</p>
              <p className="text-gray-600 font-bold text-sm md:text-base">{s.desc2}</p>
              <p className="text-gray-600 font-bold text-sm md:text-base">{s.desc3}</p>
              <p className="text-gray-600 font-bold text-sm md:text-base">{s.desc4}</p>
              {s.link && (
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  
                </a>
              )}
            </div>
          ))} 
        </div>
      </div>

      <div className="flex items-center gap-4 mt-8 justify-center">
         <a href="NFCdetail">  <button className=" text-white bg-black px-6 py-3 rounded-md font-semibold btn-2">
           Explore It
          </button></a>
          </div>
    </section>


             

     {/* contacts to your CRM  */}

      <section className="py-4 bg-[#ebebeb3d]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">  
          {/* Header Image & Text */}
          <AnimatedSection animation="scale" delay={300}>
          <div className="text-center">
           <button
              className="mx-auto px-8 py-4 text-lg font-semibold rounded-xl 
                        bg-gradient-to-r from-green-500 to-emerald-600 
                        text-white shadow-lg hover:scale-105 
                        hover:shadow-xl transition-all duration-300 flex"
            >
              <img 
              src="src/assets/Icons/star-icon.png" 
               className="w-8 " />
              Scan & Add to CRM
            </button>
            <h1 className=" pt-3 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
              Scan and add contacts to your CRM
            </h1>
            <p className="text-gray-500 pt-3 max-w-2xl mx-auto">
              Quickly capture contact data by scanning a card with your mobile
              phone and saving it instantly in your CRM.
            </p>
          </div></AnimatedSection>

          {/* Steps Section */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {/* Step 1 */}
            <AnimatedSection animation="fade-left" delay={300}>
            <div className="text-center bg-white rounded-lg shadow p-4 w-80">
              <AnimatedSection animation="fade-up">
              <img
                src="src/assets/Step1.png"
                alt="Step 1"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-[1.3]"
              />
              <h5 className="text-lg font-bold mt-4">Step 1</h5></AnimatedSection>
              <p className="text-gray-600">
                Take a photo of one or more cards with the vcard scanner
              </p>
            </div></AnimatedSection>

            {/* Step 2 */}
             <AnimatedSection animation="fade-up" delay={300}>
            <div className="text-center bg-white rounded-lg shadow p-4 w-80">
              <AnimatedSection animation="fade-up">
              <img
                src="src/assets/Step2.png"
                alt="Step 2"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-[1.3]"
              />
              <h5 className="text-lg font-bold mt-4">Step 2</h5></AnimatedSection>
              <p className="text-gray-600">
                Upload the photos and/or add any comments
              </p>
            </div></AnimatedSection>

            {/* Step 3 */}
             <AnimatedSection animation="fade-right" delay={300}>
            <div className="text-center bg-white rounded-lg shadow p-4 w-80">
              <AnimatedSection animation="fade-up">
              <img
                src="src/assets/Step3.png"
                alt="Step 3"
                className="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-[1.3]"
              />
              <h5 className="text-lg font-bold mt-4">Step 3</h5></AnimatedSection>
              <p className="text-gray-600">
                Contact created! Now you can add it directly to your CRM of
                choice
              </p>
            </div></AnimatedSection>
          </div>

          {/* Learn More Button */}
          <div className="pt-8">
            <a href="Work">  <button className=" text-black px-6 py-3 rounded-md font-semibold btn-2">
         Learn More
          </button></a>
           
          </div>
        </div>
      </div>
    </section>


    {/* Discover a wide range of Corporate Solutions */}
   
            
           


     <section className="bg-[#f1f5f9] py-5 px-4 sm:px-10 text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
       <p> Discover a wide range of</p>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600">
          Corporate Solutions
        </span>
      </h2>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        Versatile solutions for modern corporate challenges
      </p>

      {/* Cards */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8  transition-transform duration-300">
        {/* Card 1 */}
          <AnimatedSection animation="fade-left" delay={300}>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition duration-300 transform hover:scale-105 border-2 border-purple-200 hover:border-pink-300">
          <img
            src="src/assets/Personalised.jpg"
            alt="NFC Card"
            className="rounded-sm mx-auto mb-4 "
          />
          <h3 className="text-black font-semibold text-base mb-1">
            1. Personalised NFC Cards
          </h3>
          <p className="text-gray-600 text-sm">
            Customise with your logo, colour, and design that resonates with your brand.
          </p>
        </div>
        </AnimatedSection>

        {/* Card 2 */}
        <AnimatedSection animation="fade-up" delay={300}>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition duration-300 transform hover:scale-105 border-2 border-purple-200 hover:border-pink-400">
          <img
            src="src/assets/Customised.jpg"
            alt="Custom URL"
            className="rounded-sm mx-auto mb-4 "
          />
          <h3 className="text-black font-semibold text-base mb-1">
            2. Customised URL
          </h3>
          <p className="text-gray-600 text-sm ">
            Custom digital business card profile with a brand-specific themed URL.
          </p>
        </div>
        </AnimatedSection>

        {/* Card 3 */}
        <AnimatedSection animation="fade-right" delay={300}>
        <div className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition duration-300 transform hover:scale-105 border-2 border-purple-200 hover:border-pink-300 ">
          <img
            src="src/assets/Secured.jpg"
            alt="Admin Panel"
            className="rounded-sm mx-auto mb-4 "
          />
          <h3 className="text-black font-semibold text-base mb-1">
            3. Secured Admin Panel
          </h3>
          <p className="text-gray-600 text-sm">
            Multi-purpose dashboard to manage templates, employees, order cards.
          </p>
        </div>
        </AnimatedSection>
      </div>

      {/* Inquire Now Button */}
      <div className="mt-10">
        <a href="Contact">
        <button className="border btn-2 text-black px-6 py-3 rounded-md font-semibold">
           Inquire Now
          </button></a>
      </div>
    </section>
  

  {/* Enhanced safety, security and control. */}
      



      {/* Testimonials Section */}
      <section className="py-5  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" delay={300} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-500 mb-4">
              What Our User Say
            </h2>
          </AnimatedSection>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                <blockquote className="text-lg md:text-xl text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <p className="text-purple-500 font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
              </div>
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
       
    </body>
  );
}

export default Home;