# QR Recognition & 3D Model AR Web Viewer 🚀

QR Recognition & 3D Model AR Web Viewer scans QR codes to load & view 3D models in AR. Built with React, it offers real-time scanning, AR visualization & sleek UI design. Works on Android & iOS browsers.

## 🔗 Live Demo & Repository
- **Live Demo:** [QR & AR Viewer](https://saurabhqr.vercel.app/)
- **GitHub Repository:** [Source Code](https://github.com/s11saurabh/QR_Recognition-3D_Model-AR_Web_Viewer)

---

## 📑 Table of Contents

- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Components Overview](#-components-overview)
- [Styling System](#-styling-system)
- [Design Elements](#-design-elements)
- [Functionality](#-functionality)
- [Performance Optimizations](#-performance-optimizations)
- [Browser Compatibility](#-browser-compatibility)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### Core Features
- QR Code scanning with real-time validation
- AR model viewing of .glb files
- Mobile-responsive design
- Cross-platform compatibility (Android Web & iOS Safari)
- Real-time error handling with toast notifications
- Modern UI with gradient effects and animations

### Enhanced UI/UX
- Gradient color schemes and animations
- Interactive hover effects
- Loading states with animations
- Toast notifications for error handling
- Responsive design for all screen sizes
- Background patterns and geometric designs


<img width="1467" alt="image" src="https://github.com/user-attachments/assets/ec849695-9edc-46bc-87d3-52a1b13c1ff8" />

Camera Access Cross-platform compatibility (Android Web & iOS Safari)

<img width="1466" alt="image" src="https://github.com/user-attachments/assets/d1cb76bb-2a06-4105-a27e-d48addb96032" />

Recognition is failed or wrong url, show an error toast popup that disappears after 2 seconds

<img width="1465" alt="image" src="https://github.com/user-attachments/assets/51d0cd94-d4ad-4dd0-930a-528cdab752e0" />

Qr Containing the link of 3D model (https://jhjin-common.s3.ap-southeast-2.amazonaws.com/glbSample/sample_1.glb)

<img width="451" alt="image" src="https://github.com/user-attachments/assets/2d30f43a-68f2-4da6-9e82-df443a706c8b" />


Recognition is succeeded, 3D model(a glTF file) loaded Successfully


<img width="1467" alt="image" src="https://github.com/user-attachments/assets/3a124c0e-0686-448f-bc94-e581a9f9e667" />

Qr Containing the link of 3D model (https://jhjin-common.s3.ap-southeast-2.amazonaws.com/glbSample/sample_2.glb)

<img width="445" alt="image" src="https://github.com/user-attachments/assets/92bf8517-89be-40ec-9ef2-15f9c9c8fe6b" />


Recognition is succeeded, 3D model(a glTF file) loaded Successfully


<img width="1467" alt="image" src="https://github.com/user-attachments/assets/cf541fa5-ddcc-4634-8ec3-802ea3ceb6f2" />

---

## 🛠 Technology Stack

### Core Technologies
- **React** - Frontend framework
- **A-Frame** - AR/VR framework
- **jsQR** - QR code scanning library
- **TailwindCSS** - Utility-first CSS framework
- **React Toastify** - Toast notifications

### Additional Libraries
```json
{
  "dependencies": {
    "aframe": "^1.4.2",
    "aframe-extras": "^7.0.0",
    "jsqr": "^1.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-toastify": "^9.1.3"
  }
}
```

---
## 📁 Project Structure

```plaintext
QR_Recognition-3D_Model-AR_Web_Viewer/
├── public/
│   ├── models/
│   │   ├── sample_1.glb
│   │   └── sample_2.glb
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ARViewer.css
│   │   ├── ARViewer.js
│   │   ├── BackgroundDesign.js
│   │   ├── Footer.js
│   │   ├── QRScanner.css
│   │   ├── QRScanner.js
│   │   └── Toast.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## 🚀 Installation

1. **Clone the repository**
```bash
git clone https://github.com/s11saurabh/QR_Recognition-3D_Model-AR_Web_Viewer.git
cd QR_Recognition-3D_Model-AR_Web_Viewer
```

2. **Install dependencies**
```bash
npm install

```

3. **Start development server**
```bash
npm start

```

---

## 🧩 Components Overview

### ARViewer Component
The ARViewer component handles the 3D model visualization in AR:
- Uses A-Frame for AR rendering
- Supports .glb file format
- Implements loading states
- Handles model positioning and scaling
- Features success message with gradient animation

### QRScanner Component
Manages QR code scanning functionality:
- Real-time camera feed processing
- QR code detection using jsQR
- URL validation
- Error handling
- Camera permission management
- Cleanup on unmount

### BackgroundDesign Component
Creates the sophisticated background pattern:
- Gradient circles
- Geometric shapes
- Diagonal patterns
- Dot patterns
- Grid overlays
- Dynamic opacity levels

### Toast Component
Handles notification system:
- Error notifications
- Success messages
- Customized styling
- Auto-dismiss functionality

### Footer Component
Provides application footer:
- Gradient styling
- Hover effects
- Responsive design

---

## 🎨 Styling System

### Color Scheme
```css
/* Primary Colors */
--blue-600: #2563eb;
--purple-600: #9333ea;

/* Gradient Combinations */
background: linear-gradient(to right, var(--blue-600), var(--purple-600), var(--blue-600));
```

### Animation System
```css
/* Hover Transitions */
.hover-scale {
  transition: transform 0.5s ease;
}

/* Gradient Animations */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 🌐 Browser Compatibility

### Supported Browsers
- Chrome for Android (latest)
- Safari iOS (13+)
- Chrome Desktop (latest)
- Firefox Desktop (latest)
- Edge (latest)

### Required Features
- WebRTC
- WebGL
- WebXR

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

## 🙏 Acknowledgments

- A-Frame community
- jsQR library developers
- React and TailwindCSS teams
- Developed By Saurabh Kumar
