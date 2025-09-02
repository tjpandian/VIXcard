import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Users, 
  Heart, 
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight 
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const companyValues = [
  {
    icon: <Target className="h-12 w-12" />,
    title: 'Our Mission',
    description: 'To empower businesses with cutting-edge digital marketing strategies that drive measurable growth and create lasting impact in the digital landscape.'
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: 'Our Team',
    description: 'A diverse group of creative professionals, strategists, and digital experts passionate about delivering exceptional results for our clients.'
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: 'Company Culture',
    description: 'We foster innovation, collaboration, and continuous learning in an environment where creativity thrives and everyone can make a meaningful impact.'
  }
];

const employeeTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Digital Strategist',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'Working at Viskamnix has been transformative for my career. The collaborative environment and cutting-edge projects keep me motivated every day.'
  },
  {
    name: 'Amit Patel',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'The creative freedom and support from leadership allows us to push boundaries and create campaigns that truly make a difference for our clients.'
  },
  {
    name: 'Lisa Chen',
    role: 'Performance Marketing Lead',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'Viskamnix invests in our professional development and provides opportunities to work with the latest tools and technologies in digital marketing.'
  },
  {
    name: 'Rahul Kumar',
    role: 'SEO Specialist',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote: 'The team culture here is amazing. We support each other, share knowledge freely, and celebrate both individual and collective successes.'
  }
];

const benefits = [
  'Competitive salary and performance bonuses',
  'Flexible work arrangements and remote options',
  'Professional development and training programs',
  'Health and wellness benefits',
  'Creative project opportunities',
  'Collaborative and inclusive work environment'
];

const openPositions = [
  {
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Chennai, India'
  },
  {
    title: 'Social Media Specialist',
    department: 'Creative',
    type: 'Full-time',
    location: 'Chennai, India'
  },
  {
    title: 'SEO Analyst',
    department: 'Performance',
    type: 'Full-time',
    location: 'Chennai, India'
  },
  {
    title: 'Content Writer',
    department: 'Creative',
    type: 'Full-time',
    location: 'Remote'
  }
];


const timelineData = [
  {
   
    title: "How to Create Multiple Digital Business Profiles?",
    description:
      "How to Manage Multiple Digital Profiles on the VIXcard",
    head:"Profile Management",
    image: "src/assets/work/Digital Business.jpg", // replace with real image
    side: "left",
  },
  {
    
    title: "How to Link Your VIXcard Smart Card?",
    description:
      "How to Link a New Smart Card to the VIXcard",
    head:"Card Linking Methods",
    image: "src/assets/work/new-card.jpg",
    side: "right",
  },
  {
   
    title: "How to Disable Your Smart Business Card?",
    description:
      "How to Delete Your Smart Business Card?",
     head:"Securing Your VIXcard ",
    image: "src/assets/work/disble.jpg",
    side: "left",
  },
   {
    
    title: "How to Share Your VIXcard Profile Via NFC on Android?",
    description:
      "How to Scan QR Code for  VIXcard on Android?",
       head:"Card Functionality Tutorials",
    image: "src/assets/work/Android.jpg",
    side: "right",
  },
  {
   
    title: "How to Effortlessly Share Your VIXcard Profile?",
    description:
      "How to Share Your VIXcard Profile Via Digital QR Code?",
     head:"Effortless Sharing",
    image: "src/assets/work/Digital QR Code.jpg", // replace with real image
    side: "left",
  },
];



function Work() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % employeeTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + employeeTestimonials.length) % employeeTestimonials.length);
  };

  return (
    <body className="overflow-hidden ">

      <Header/>
      {/* Hero Section */}
      <section className="bg-white text-black  pt-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-6xl font-bold font-['Poppins'] mb-6">
              Join Our Growing business
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Be part of a dynamic team that's transforming the digital marketing landscape
            </p>
          </AnimatedSection>
        </div>
      </section>

      

   {/* tree table  */}


       <div className="bg-white text-black min-h-screen flex items-center justify-center p-8">
      <div className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-purple-400  -translate-x-1/2"></div>
            
        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <AnimatedSection animation="fade-up" delay={300}>
            <div
              key={index}
              className={`flex items-center gap-8 ${
                item.side === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-1/2 grid justify-center">
              <h3 className="text-black uppercase tracking-wide text-base md:text-3xl ">
                  {item.head}
                </h3>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mt-3 w-[100%] h-[100%] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

                 {/* Text Content */}
              <div className="w-1/2">
                <h3 className="bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 text-transparent bg-clip-text uppercase tracking-wide text-sm">
                  {item.title}
                </h3>               
                <p className="text-sm text-black font-bold mt-2 max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
              </AnimatedSection>
          ))}
        </div>
      
      </div>
    </div>

   {/* tree table end */}

     {/* Final CTA Section */}
      <section className="py-8 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-up" delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] mb-6">
              VIXcard Smart Business Cards
            </h2>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 text-transparent bg-clip-text mb-8 max-w-2xl mx-auto">            
              Designed to Impress.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
        


        {/* Introduction Section */}
      <section className="py-8 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" delay={300} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-4">
              Why Choose Viskamnix 
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us a great place to build your career
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <AnimatedSection delay={300}
                key={value.title}
                animation="fade-up"              
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-purple-600 mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-black mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive benefits and growth opportunities
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                    <p className="text-black font-medium">{benefit}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

    

      
    

      <Footer />
    </body>
  );
}

export default Work;