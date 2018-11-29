import React from 'react';

import './Container.css';

/**
 * A wrapper component, with customable style attributes.
 * It follows the CSS Flex settings.
 * */
export default function Container({ children, customStyles }) {
  return (
    <div className="container" style={customStyles}>
      {children}
    </div>
  );
}
