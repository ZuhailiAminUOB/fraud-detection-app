// src/components/Alert.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Alert({ message, type }) {
  if (!message) return null; // Don't render if there's no message

  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {message}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;
