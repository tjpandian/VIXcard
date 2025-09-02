import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

import Header from '../components/Header';




function Product() {
  return (
    <body className="overflow-hidden">
        <Header/>
  
    {/* Page Heading */}
      

         
         {/* Product Section */}
      <div className="flex-1 stages-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">  
        <span className="pt-3 text-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
          All Products
        </span>
        <h1 className="text-2xl font-bold mb-4">
            
        Data Exchange Format (NDEF) Technical Specification
         
        </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 stage">
          {/* Create Card */}
          <div className="card  text-black p-6 rounded-xl flex flex-col justify-between shadow">
            <div>
              {/* <img
                src="src/assets/PVC-Cards.webp"
                alt="icon"
                className="mb-6 w-20 h-10"
              /> */}
              <h2 className="text-xl md:text-3xl font-semibold leading-tight pt-2">
                Let’s create<br />something new<br />for you!
              </h2>
            </div>
            <button className="mt-4 bg-teal-400 text-black py-2 rounded-full font-semibold">Start Now</button>
          </div>

          {/* Product 1 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/blank1.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
            
            <p className="text-gray-400 line-through text-sm">
              ₹1110 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹999</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/blank2.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
            
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>
          
          {/* Product 3 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/blank3.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
           
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>

           {/* Product 4 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/metal1.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
            
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>

            {/* Product 5 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/metal2.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
            
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>
           
              {/* Product 6 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/metal3.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
           
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>
            

              {/* Product 7 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/Pops-card.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
          
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>
           

             {/* Product 8 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/Pop1.jpg"
              alt="Product"
              className="mb-4 img"
            />
            <div className="title">
            
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>
             

               {/* Product 9 */}
          <div className="card bg-white p-4 rounded-xl shadow text-center">
            <img
              src="src/assets/Pop2.jpg"
              alt="Product"
              className="mb-4 img"


            />
            <div className="title">
           
            <p className="text-gray-400 line-through text-sm">
              ₹1666 <span className="text-red-500">(10% OFF)</span>
            </p>
            <p className="font-bold text-lg text-gray-800">₹1499</p>
            </div>
          </div>
          

           {/* Create Card */}
          <div className="card bg-gradient-to-br from-black to-gray-900 text-white p-6 rounded-xl flex flex-col justify-between  shadow">
            <div>
              <img
                src="src/assets/PVC-Cards.webp"
                alt="icon"
                className="mb-6 w-20 h-10"
              />
              <h2 className="text-xl md:text-3xl font-semibold leading-tight pt-2">
                Let’s create<br />something new<br />for you!
              </h2>
            </div>
            <button className="mt-5 bg-teal-400 text-black py-2 rounded-full font-semibold">Start Now</button>
          </div>


        </div>
      </div>  

     
      
      
       <Footer/>

    </body> 
  )
}

export default Product