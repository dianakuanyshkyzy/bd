import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Confetti from 'react-confetti';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackgroundMusic from '../../components/BackgroundMusic';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Roboto', 'Lobster', sans-serif" }}>
      {/* Confetti Component */}
      
      {showConfetti && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}

      <Navbar />
      <BackgroundMusic />
      <main
        style={{
          textAlign: 'center',
          padding: '2rem 1rem',
          backgroundImage: 'url("/images/bck.jpeg")', // Background image path
          backgroundSize: 'cover', // Ensures the image covers the entire background
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent tiling
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            fontSize: '6rem',
            fontWeight: 'bold',
            color: '#DA498D', // Elegant deep purple
            textShadow: '3px 3px #ffc0cb', // Baby pink shadow for festivity
            marginBottom: '1rem',
            fontFamily: "'Lobster', cursive", // Stylish and playful font
          }}
        >
          🎂 С днем рождения, Дианчик! 🎉
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ y: '-100vw' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            fontSize: '1.7rem',
            fontWeight: '600',
            color: '#A3477A', // Slightly darker purple for contrast
            marginTop: '1rem',
            fontFamily: "'Pacifico'", // Friendly and celebratory font
          }}
        >
          Спасибо за то, что ты есть! Мы все тебя сильно любим, ты самая классная и веселая наша подружка:3 🎁
        </motion.p>

       
      </main>
      <Footer />
    </div>
  );
}
