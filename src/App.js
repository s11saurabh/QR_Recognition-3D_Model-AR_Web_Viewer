import React, { useState } from 'react';
import QRScanner from './components/QRScanner';
import ARViewer from './components/ARViewer';
import ToastComponent from './components/Toast';
import Footer from './components/Footer';
import BackgroundDesign from './components/BackgroundDesign';
import { FaQrcode } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [modelUrl, setModelUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanSuccess = (url) => {
    setModelUrl(url);
    setIsScanning(false);
  };

  const handleScanError = (message) => {
    setError(message);
    setIsScanning(false);
  };

  const startScanning = () => {
    setModelUrl(null);
    setIsScanning(true);
  };

  return (
    <>
      <BackgroundDesign />
      <div className="flex flex-col min-h-screen relative">
       
        <header className="relative z-10">
          <div className="container mx-auto px-6 py-6">
            <div className="relative group">
              <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 tracking-wider transform transition-all duration-500 hover:scale-105">
                QR Recognition & 3D Model AR Web Viewer
              </h1>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
              
              
              <div className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </header>

        
        <main className="relative z-10 container mx-auto px-6 py-8 flex-grow">
          {!isScanning && !modelUrl && (
            <div className="flex justify-center">
              <button
                onClick={startScanning}
                className="group relative px-8 py-6 rounded-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
                
               
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                
                <div className="relative flex flex-col items-center">
                  <FaQrcode 
                    size={50} 
                    className="mb-2 text-white group-hover:text-gray-700 transition-colors duration-500" 
                  />
                  <span className="text-lg font-medium text-white group-hover:text-gray-700 transition-colors duration-500">
                    SCAN QR
                  </span>
                </div>
              </button>
            </div>
          )}

          {isScanning && !modelUrl && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <QRScanner onScanSuccess={handleScanSuccess} onScanError={handleScanError} />
            </div>
          )}

          {modelUrl && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ARViewer modelUrl={modelUrl} />
            </div>
          )}

          <ToastComponent error={error} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default App;