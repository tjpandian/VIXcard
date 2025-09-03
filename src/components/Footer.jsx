import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media */}
          <div className=" ">
            <img       
            className="w-20"     
             src="src/assets/logo-removebg-preview.png"/>
          
          <div>
            <h3 className="text-lg font-bold font-['Poppins'] text-purple-500 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://Linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-['Poppins'] text-purple-500 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-purple-500 transition-colors">
                Home
              </Link>
              <Link to="/Product" className="block hover:text-purple-500 transition-colors">
                Product
              </Link>
              <Link to="/Work" className="block hover:text-purple-500 transition-colors">
                How It Work
              </Link>
              
              <Link to="/contact" className="block hover:text-purple-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold font-['Poppins'] text-purple-500 mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a
                  href="mailto:hello@viskamnixdigital.com"
                  className="hover:text-purple-500 transition-colors"
                >
                  vixCrad@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a
                  href="tel:+919876543210"
                  className="hover:text-purple-500 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Viskamnix . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;