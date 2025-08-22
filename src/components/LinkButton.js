import React from 'react';
import './LinkButton.css';

const LinkButton = ({ text, link, color }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
      style={{ backgroundColor: color }}
    >
      {text}
    </a>
  );
};

export default LinkButton;
