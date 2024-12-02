import { useState } from 'react'
import languages from './assets/data/languages'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div>
      <header >
        <h1>Web Languages</h1>
      </header>

      {/* Bottoni */}
      <div>
        {languages.map((language) => (
          <button
            key={language.id}
            onClick={() => setSelectedLanguage(language)}
            
          >
            {language.title}
          </button>
        ))}
      </div>

       {/* Card */}
       <div
        
      >
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    </div>
  );
};
  


export default App
