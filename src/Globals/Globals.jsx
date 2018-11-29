import React from 'react';

import './Globals.css';

// A component for storing initial global CSS values.
export default function Globals({ children }) {
  return (
    <div className="globals">
      {children}
    </div>
  );
}
