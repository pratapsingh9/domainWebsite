import React, { useState, useEffect } from 'react';

type FontSize = {
  main: string;
  name: string;
  subtext: string;
};

const PratapWebsite: React.FC = () => {
  const [isGrowing, setIsGrowing] = useState(false);
  const [fontSize, setFontSize] = useState<FontSize>(calculateFontSize());

  function calculateFontSize(): FontSize {
    const width = window.innerWidth;
    if (width < 600) {
      return {
        main: '3.5rem',
        name: '2rem',
        subtext: '1.5rem',
      };
    } else if (width < 1024) {
      return {
        main: '5.5rem',
        name: '2.5rem',
        subtext: '2rem',
      };
    } else {
      return {
        main: '7rem',
        name: '3rem',
        subtext: '2.5rem',
      };
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setFontSize(calculateFontSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTwitterFollow = () => {
    window.open('https://x.com/prataps72105367', '_blank');
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          transform: isGrowing ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer',
          width: '90%',
          maxWidth: '800px',
          padding: '20px',
        }}
        onMouseEnter={() => setIsGrowing(true)}
        onMouseLeave={() => setIsGrowing(false)}
      >
        <h1
          style={{
            color: 'white',
            fontSize: fontSize.main,
            margin: '0',
            padding: '0',
            lineHeight: '1.2',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          Hello Kids
        </h1>
        <p
          style={{
            color: 'white',
            fontSize: fontSize.name,
            margin: '10px 0 0',
            padding: '0',
            lineHeight: '1.2',
          }}
        >
          Myself Pratap
        </p>
        <p
          style={{
            color: 'white',
            fontSize: fontSize.subtext,
            margin: '10px 0 0',
            padding: '0',
            lineHeight: '1.2',
          }}
        >
          just build boring things
        </p>

        <button
          onClick={handleTwitterFollow}
          style={{
            marginTop: '30px',
            padding: '12px 24px',
            fontSize: '1.2rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: 'scale(1)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1.05)';
            target.style.backgroundColor = 'black';
            target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1)';
            target.style.backgroundColor = 'white';
            target.style.color = 'black';
          }}
        >
          Follow on Twitter
        </button>
      </div>
    </div>
  );
};

export default PratapWebsite;
