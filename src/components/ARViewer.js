// src/components/ARViewer.js
import React, { useEffect, useState } from 'react';
import 'aframe';
import 'aframe-extras';
import './ARViewer.css';

const ARViewer = ({ modelUrl }) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const modelEntity = document.querySelector('[gltf-model]');
    if (modelEntity) {
      modelEntity.addEventListener('model-loaded', () => {
        setIsModelLoaded(true);
      });
    }
  }, [modelUrl]);

  return (
    <div className="relative w-full h-[80vh] bg-white rounded-lg overflow-hidden shadow-lg border-2 border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Diagonal lines */}
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
        
        {/* Circular patterns */}
        <div className="absolute top-20 -left-10 w-40 h-40 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)'
          }}>
        </div>
      </div>

      {/* Loading Overlay */}
      {!isModelLoaded && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <div className="w-full h-full rounded-full border-4 border-t-blue-600 border-r-purple-600 border-b-blue-600 border-l-purple-600 animate-spin"></div>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-lg font-medium">
              Initializing AR...
            </p>
          </div>
        </div>
      )}

      {/* A-Frame Scene */}
      <a-scene
        embedded
        vr-mode-ui="enabled: false"
        renderer="logarithmicDepthBuffer: true; antialias: true;"
        xrwebxr="ar"
        loading-screen="enabled: false"
        className="w-full h-full"
      >
        {/* 3D Model */}
        <a-entity
          gltf-model={modelUrl}
          scale="0.5 0.5 0.5"
          position="0 0 -1"
          rotation="0 0 0"
          animation-mixer
          shadow="cast: true; receive: true"
        ></a-entity>

        {/* Lighting */}
        <a-light type="ambient" intensity="0.5"></a-light>
        <a-light type="directional" position="1 1 1" intensity="0.8" castShadow="true"></a-light>

        {/* Camera */}
        <a-camera position="0 0 0"></a-camera>

        {/* Success Message */}
        <a-entity
          position="0 -0.5 -1.5"
          geometry="primitive: plane; width: 1.2; height: 0.3"
          material="color: white; opacity: 0.9"
          text="value: Successfully Loaded; align: center; color: #2563eb; width: 4; wrapCount: 20; font: monoid"
          animation__color="property: text.color; from: #2563eb; to: #9333ea; dur: 2000; dir: alternate; loop: true"
          class="clickable"
        ></a-entity>
      </a-scene>
    </div>
  );
};

export default ARViewer;