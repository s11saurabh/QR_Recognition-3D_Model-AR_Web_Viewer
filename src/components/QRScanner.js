import React, { useRef, useEffect, useState } from 'react';
import jsQR from 'jsqr';

const QRScanner = ({ onScanSuccess, onScanError }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isVideoInitialized, setIsVideoInitialized] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  const validUrls = [
    'https://jhjin-common.s3.ap-southeast-2.amazonaws.com/glbSample/sample_1.glb',
    'https://jhjin-common.s3.ap-southeast-2.amazonaws.com/glbSample/sample_2.glb',
  ];

  const handleVideoPlay = () => {
    if (!isVideoInitialized && isScanning) {
      setIsVideoInitialized(true);
      tick();
    }
  };

  useEffect(() => {
    const constraints = {
      video: { 
        facingMode: 'environment',
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
    };

    let mounted = true;

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (mounted && videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        if (mounted) {
          console.error('Camera error:', err);
          onScanError('Camera permission denied or not available');
        }
      }
    };

    if (isScanning) {
      startVideo();
    }

    return () => {
      mounted = false;
      cleanupVideo();
    };
  }, [onScanError, isScanning]);

  const cleanupVideo = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setIsVideoInitialized(false);
  };

  const tick = () => {
    if (!isScanning) return;

    if (videoRef.current?.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d', { willReadFrequently: true });

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        const scannedUrl = code.data;
        if (validUrls.includes(scannedUrl)) {
          setIsScanning(false);
          cleanupVideo();
          onScanSuccess(scannedUrl);
          return;
        } else {
          onScanError('Invalid QR code URL');
        }
      }
    }
    
    if (isScanning) {
      animationFrameRef.current = requestAnimationFrame(tick);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {isScanning && (
        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg border-2 border-black">
         
          <video
            ref={videoRef}
            className="w-full h-auto aspect-video object-cover"
            playsInline
            autoPlay
            muted
            onLoadedMetadata={handleVideoPlay}
          />
          
          
          <div className="absolute inset-0">
           
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, 
                  rgba(37, 99, 235, 0.05) 0px, 
                  rgba(37, 99, 235, 0.05) 2px, 
                  transparent 2px, 
                  transparent 10px
                )`
              }}>
            </div>
            

            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-scan"></div>
            
        
            <div className="absolute inset-0 p-8">
              <div className="w-full h-full border-2 border-dashed border-blue-600/50 rounded-lg"></div>
            </div>
          </div>

         
          <canvas ref={canvasRef} className="hidden" />
          
 
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t-2 border-black">
            <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-lg font-medium">
              Point Your QR Code at Camera
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;