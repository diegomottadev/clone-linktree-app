import "./App.css";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import UserName from "./components/UserName/UserName";
import Title from "./components/Title/Title";
import HyperLink from "./components/HiperLink/HyperLink";
import Subtitle from "./components/Subtitle/Subtitle";
import Bio from "./components/Bio/Bio";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Result from "./components/Result/Result";
import { useState } from "react";
import en from './languajes/en';
import es from './languajes/es';
import DescriptionHyperlinks from "./components/DescriptionHyperlinks/DescriptionHyperlinks";


const LanguageSelector = ({ onSelectLanguage,currentLanguage  }) => {
  return (
    <div className="language-selector">
      <button onClick={() => onSelectLanguage('es')}  style={{ marginRight: '1px' }} className={currentLanguage  === 'es' ? 'selected' : ''}> <img src="images/argentina-flag-wave-icon-16.png" alt="arg"/></button>
      <button onClick={() => onSelectLanguage('en')} style={{ marginLeft: '1px' }} className={currentLanguage  === 'en' ? 'selected' : ''}><img src="images/united-states-of-america-flag-wave-icon-16.png" alt="en"/></button>
    </div>
  );
};

function App() {


  const [language, setLanguage] = useState('es'); // Por defecto en inglés

  const texts = language === 'en' ? en : es;

  return (
    <Router>
      <Routes>
        <Route exact
          path="/"
          element={
            <div className="">
               <LanguageSelector onSelectLanguage={setLanguage} currentLanguage={language} />
              <section className="animated-background">
                <div className="stars1"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
              </section>
              <ProfilePicture />
              <UserName />
              <Title onTitle={texts.title}/>
              <Subtitle  />
              <Bio onBio={texts.bio} currentLanguage={language}/>
              <div className="links" style={{maxWidth:'675px',margin:'0 auto'}}>
                <Link className="link link-featured" to="/results">
                  <i className="fa fa-rocket">&nbsp;</i>{texts.hyperlinks.content_1}
                </Link>
              </div>
              <DescriptionHyperlinks onDescription={texts.descriptionHyperlinks} />
              <p className="links-section-title">{language === 'es' ? 'Encuéntrame en' : 'Find me on'}</p>
              <HyperLink onHyperlink={texts.hyperlinks} />
              <footer className="site-footer">
                {language === 'es'
                  ? '"Convirtiendo ideas en código, una línea a la vez." — Diego Motta'
                  : '"Turning ideas into code, one line at a time." — Diego Motta'}
              </footer>
            </div>
          }
        />
        <Route exact path="/results" element={        
          
            <div className="">
               <LanguageSelector onSelectLanguage={setLanguage} currentLanguage={language}/>
                <section className="animated-background">
                  <div className="stars1"></div>
                  <div className="stars2"></div>
                  <div className="stars3"></div>
                </section>
                <ProfilePicture />
                <UserName />
                <Title onTitle={texts.title}/>
                <Subtitle />
                <Result  currentLanguage={language}/>
                <footer className="site-footer">
                  {language === 'es'
                    ? '"Convirtiendo ideas en código, una línea a la vez." — Diego Motta'
                    : '"Turning ideas into code, one line at a time." — Diego Motta'}
                </footer>
            </div>} />

      </Routes>
    </Router>
  );
}

export default App;
