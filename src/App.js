import React from 'react';
import './App.css';
import LinkButton from './components/LinkButton';
import BotProfile from './components/BotProfile';

function App() {
  return (
    <div className="container">
      <div className="content">
        <BotProfile
          imageUrl="https://cdn.discordapp.com/avatars/BOT_ID/BOT_AVATAR_HASH.png" // BOT_ID ve BOT_AVATAR_HASH kısımlarını botunuzun bilgileriyle değiştirin
          botName="Botunuzun Adı"
        />

        <p className="description">
          Botunuzun kısa bir açıklaması veya hoş geldiniz mesajı. Bu kısım için etkileyici ve akılda kalıcı bir metin yazabilirsiniz.
        </p>

        <div className="button-group">
          <LinkButton
            text="Botu Davet Et"
            link="https://discord.com/oauth2/authorize?client_id=1234567890&scope=bot"
            color="#5865F2" // Discord Mavisi
          />
          <LinkButton
            text="Destek Sunucusu"
            link="https://discord.gg/desteksunucusu"
            color="#FEE75C" // Discord Sarısı
          />
          <LinkButton
            text="Web Sitesi"
            link="https://www.ornek-site.com"
            color="#FF5733" // Koyu Turuncu
          />
          <LinkButton
            text="Kaynak Kodu"
            link="https://github.com/kullaniciadi/bot-repo"
            color="#99AAB5" // Koyu Gri
          />
        </div>
      </div>
    </div>
  );
}

export default App;
