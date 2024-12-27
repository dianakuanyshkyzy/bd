import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#FFFDEC', // Matches the Navbar for consistency
        color: '#EFB6C8', // Subtle off-white text
        marginTop: 'auto',
        fontSize: '1rem',
        fontFamily: 'Poppins, Arial, sans-serif',
      }}
    >
      <p style={{ margin: 0 }}>
        Made with ❤️ by Diana :D
      </p>
    </footer>
  );
};

export default Footer;
