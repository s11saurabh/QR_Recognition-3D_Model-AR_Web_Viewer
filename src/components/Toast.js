import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastComponent = ({ error }) => {
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        className: 'bg-white border-2 border-black shadow-lg',
        bodyClassName: 'text-gray-700 font-medium',
        progressClassName: 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'
      });
    }
  }, [error]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default ToastComponent;