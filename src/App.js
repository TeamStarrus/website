import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton';
import BotProfile from './components/BotProfile';

function App() {
  return (
    <div className="container">
      <div className="content">
        <BotProfile
          imageUrl="https://cdn.discordapp.com/avatars/711945179535245323/625c29ea1e00e3708da5ef4ffbb55357.png"
          botName="Starrus"
        />

        <p className="description">
          Starrus is a fast, useful, multi-purpose and server-specific Discord.js bot with a simple coding style.
        </p>

        <div className="button-group">
          <LinkButton
            text="Add Bot to Your Server"
            link="https://discord.com/oauth2/authorize?client_id=711945179535245323&permissions=8&integration_type=0&response_type=code&scope=applications.commands+bot"
            color="#FFFFFF"
          />
          <LinkButton
            text="Join Support Server"
            link="https://discord.com/invite/nnCSmPeaGV"
            color="#0032A0"
          />
          <LinkButton
            text="View Source Code"
            link="https://github.com/coa262/StarrusDiscordBot"
            color="#DA291C"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
