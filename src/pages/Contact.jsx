import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

import Header from '../components/Header';

const industries = [
  {
    title: 'Real Estate',
    description: 'Property marketing and lead generation strategies',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Fashion',
    description: 'Brand building and e-commerce growth',
    image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Technology',
    description: 'B2B marketing and product launches',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    title: 'Healthcare',
    description: 'Patient acquisition and brand trust building',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const contactMethods = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'WhatsApp',
    description: 'Chat with us instantly',
     value: '+91 98765 43210',
    // action: 'https://wa.me/919876543210'
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: 'Email',
    description: 'Send us a message',
    value: 'hello@VIXcard.com',
    action: 'mailto:hello@viskamnixdigital.com'
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Address',
    description: 'Visit our office',
    value: 'Chennai, India',
    action: null
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: 'Phone',
    description: 'Call us directly',
    value: '+91 98765 43210',
    action: 'tel:+919876543210'
  }
];

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="">
     

      {/* Contact Form */}
      <section className="py-20 bg-white ">
        {/* Map Section */}
  <div className="max-w-4xl map mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7777.8371421387565!2d80.226715!3d12.912955!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzQ2LjYiTiA4MMKwMTMnNDUuNCJF!5e0!3m2!1sen!2sin!4v1755510217398!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl shadow-md"
    ></iframe>
  </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" delay={300} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      

      {/* Contact Details Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" delay={300} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach our team
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={method.title}
                animation="fade-up"
                delay={300}
              >
                <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-purple-600 flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-black mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  {method.action ? (
                    <a
                      href={method.action}
                      className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="text-gray-700 font-semibold">{method.value}</span>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    
      <Footer />

      <Header/>
    </div>
  );
}

export default Contact;