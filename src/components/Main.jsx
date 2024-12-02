import { useState } from "react";
import languages from "../assets/data/languages";

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <main>
      {/* Bottoni */}
      <div>
        {languages.map((language) => (
          <button
            className="buttons"
            key={language.id}
            onClick={() => setSelectedLanguage(language)}
          >
            {language.title}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="card">
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    </main>
  );
}
