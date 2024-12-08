import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Twitter } from 'lucide-react';

const PratapWebsite: React.FC = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const calculateResponsiveStyles = () => {
    const { width } = screenSize;
    
    const fontSizes = width < 600 
      ? { main: '2rem', name: '1.2rem', subtext: '0.9rem' }
      : width < 1024
        ? { main: '3.5rem', name: '1.8rem', subtext: '1.3rem' }
        : { main: '5rem', name: '2.5rem', subtext: '1.8rem' };

    const gridConfig = {
      cols: Math.ceil(width / (width < 600 ? 20 : 40)),
      rows: Math.ceil(screenSize.height / (width < 600 ? 20 : 40)),
      cellSize: width < 600 ? 20 : 40
    };

    return { fontSizes, gridConfig };
  };

  const [{ fontSizes, gridConfig }, setResponsiveConfig] = useState(calculateResponsiveStyles());

  useEffect(() => {
    const handleResize = () => {
      const newScreenSize = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      setScreenSize(newScreenSize);
      setResponsiveConfig(calculateResponsiveStyles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const GridBackground = useMemo(() => {
    return Array.from({ length: gridConfig.rows }, (_, rowIndex) => 
      Array.from({ length: gridConfig.cols }, (_, colIndex) => (
        <motion.div 
          key={`${rowIndex}-${colIndex}`}
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            backgroundColor: 'rgba(255,255,255,0.05)'
          }}
          animate={{ 
            opacity: [0, 0.1, 0.05], 
            scale: 1,
            backgroundColor: [
              'rgba(255,255,255,0.05)', 
              'rgba(255,255,255,0.1)', 
              'rgba(255,255,255,0.05)'
            ],
            transition: { 
              delay: (rowIndex + colIndex) * 0.02,
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            } 
          }}
          style={{
            border: '1px solid rgba(255,255,255,0.05)',
            height: '100%',
            width: '100%',
          }}
        />
      ))
    );
  }, [gridConfig]);

  const handleTwitterFollow = () => {
    window.open('https://x.com/prataps72105367', '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        position: 'relative',
        height: '100vh', 
        width: '100vw',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
          zIndex: 1
        }}
      >
        {GridBackground}
      </div>

      <motion.div
        style={{
          textAlign: 'center',
          zIndex: 10,
          width: '90%',
          maxWidth: '800px',
          padding: '20px',
          position: 'relative',
        }}
      >
        <motion.h1
          style={{
            color: 'white',
            fontSize: fontSizes.main,
            margin: '0',
            padding: '0',
            lineHeight: '1.2',
            wordWrap: 'break-word',
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
          }}
        >
          Yoo Kids
        </motion.h1>
        <motion.p
          style={{
            color: 'white',
            fontSize: fontSizes.name,
            margin: '10px 0 0',
            padding: '0',
            lineHeight: '1.2',
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            background: 'linear-gradient(to right, #fff, #aaa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Myself Pratap
        </motion.p>
        <motion.p
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: fontSizes.subtext,
            margin: '10px 0 0',
            padding: '0',
            lineHeight: '1.2',
            fontStyle: 'italic',
            fontWeight: '300',
          }}
        >
          just build things
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTwitterFollow}
          style={{
            marginTop: '30px',
            padding: screenSize.width < 600 ? '8px 16px' : '12px 24px',
            fontSize: screenSize.width < 600 ? '0.9rem' : '1rem',
            backgroundColor: 'white',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            margin: '30px auto 0',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          <Twitter size={screenSize.width < 600 ? 16 : 20} />
          Follow on Twitter
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PratapWebsite;
