import React from 'react';

function StickyNavbar() {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div className="sticky-navbar">
      {/* LinkedIn Button */}
      <button onClick={() => window.open('https://www.linkedin.com/in/pranavbprabhu', '_blank')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.96 0-1.72-.78-1.72-1.72s.78-1.72 1.72-1.72 1.72.78 1.72 1.72-.77 1.72-1.72 1.72zm13.5 10.28h-3v-4.5c0-1.08-.92-2-2-2s-2 .92-2 2v4.5h-3v-9h3v1.5c.63-.87 1.5-1.5 2.5-1.5 2.21 0 4 1.79 4 4v5z" />
        </svg>
      </button>

      {/* GitHub Button */}
      <button className="gitH" onClick={() => window.open('https://github.com/pranavofficial', '_blank')} style={{ marginLeft: '-0.3px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.43 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.01-2.06-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.11-.76.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.09 1.86 2.86 1.33 3.56 1.02.11-.79.43-1.33.77-1.63-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.23 0 4.61-2.8 5.63-5.47 5.93.44.38.82 1.11.82 2.25 0 1.63-.01 2.95-.01 3.35 0 .32.22.7.83.58 4.78-1.6 8.21-6.09 8.21-11.39 0-6.63-5.37-12-12-12z" />
        </svg>
      </button>

      {/* Email Button */}
      <button className="email" onClick={() => window.open('mailto:pranavprabhu@ucmerced.edu', '_blank')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      </button>
    </div>
  );
}

export default StickyNavbar;