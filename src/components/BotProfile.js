import React from 'react';
import './BotProfile.css';

const BotProfile = ({ imageUrl, botName }) => {
  return (
    <div className="bot-profile">
      <img
        src={imageUrl}
        alt={`${botName} Profil Fotoğrafı`}
        className="profile-image"
      />
      <h1 className="bot-name">{botName}</h1>
    </div>
  );
};

export default BotProfile;
