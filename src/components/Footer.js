import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-auto bg-white shadow-lg border-t border-gray-200">
      <div className="absolute inset-0">
        
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              rgba(37, 99, 235, 0.05) 0px,
              rgba(37, 99, 235, 0.05) 2px,
              transparent 2px,
              transparent 10px
            )`
          }}>
        </div>
        
       
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="relative group">
           
            <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mb-4 rounded-full"></div>
            
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 font-medium tracking-wider transform transition-all duration-500 hover:scale-105">
              Developed by Saurabh Kumar
            </p>
            
           
            <div className="absolute -left-4 top-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            <div className="absolute -right-4 top-1/2 w-2 h-2 bg-purple-500 rounded-full transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;