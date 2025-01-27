import './App.css';
import StickyNavbar from './StickyNavbar'; // Import the sticky navbar component
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import nameBack from './assets/back.jpg';
import conBack from './assets/contactBack.jpg';
import { useRef } from 'react';

function App() {
  const scrollToTop = () => {
    document.getElementById('parallax-container').scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Parallax id="parallax-container" pages={3}>
        <ParallaxLayer 
          offset={0} 
          speed={1} 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundImage: `url(${nameBack})`, // Corrected this line
            backgroundSize: 'cover' 
          }}
        >
          <div>
            <h1 className="myName">Pranav Prabhu</h1>
            <p className="subtitle">Computer Science and Engineering | UC Merced</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="about-me-container">
            <h1 className="myName" id="about-me-section">About Me</h1>
            <div className="vertical-line"></div>
            <div className="about-me-content">
              <p>Hi there, my name is Pranav Prabhu, a dedicated Computer Science and Engineering first-year at UC Merced passionate about leveraging technology to solve real-world problems. My academic journey has equipped me with a solid foundation in software development, data analysis, and machine learning.</p>
              <h2 className="boldMe">Projects | More info on Github</h2>
              <ul>
                <li>
                  <strong>PDF to Audio File:</strong> This Python PDF-to-Audio converter reads PDF content aloud using PyPDF2 and pyttsx3 with Tkinter.
                </li>
                <li>
                  <strong>Wordle:</strong> A C++ "Wordle" game using the official NYT word list for five-letter guesses.
                </li>
                <li>
                  <strong>Calculator:</strong> A simple calculator supporting addition, subtraction, multiplication, division, and modulo operations.
                </li>
              </ul>
              <h2 className="boldMe">Tech Stack</h2>
              <ul className="tech-stack">
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>HTML/CSS</li>
                <li>C++</li>
                <li>sci-kit</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2} 
          speed={0.3} 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundImage: `url(${conBack})`, // Corrected this line
            backgroundSize: 'cover' 
          }}
        >
          <div>
            <div className="spacer"></div>
            <h1 className="contactI">Contact Information</h1>
            <p className="emailC">Email: pranavprabhu@ucmerced.edu</p>
            <p className="phoneC">Phone: (925) 872-1774</p>
          </div>
        </ParallaxLayer>
      </Parallax>
      <div className="profile-icon" onClick={scrollToTop}></div>
      <StickyNavbar />
      <div
        className='cursor'
      />
    </div>
  );
}

export default App;
