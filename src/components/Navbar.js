import React from 'react';

const Navbar = () => {
  return (
    
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        fontSize: '1.25rem',
        backgroundColor: '#EFB6C8', // Dark, elegant background

        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#edf2f4', // Subtle off-white text
          fontFamily: 'Poppins, Arial, sans-serif', // Modern sans-serif font
        }}
      >
      
      </h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {['Home', 'Gallery', 'Wishes'].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            style={{
              textDecoration: 'none',
              color: '#edf2f4', // Matches the text color
              fontWeight: '600',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              transition: 'background-color 0.3s ease',
              fontFamily: 'Poppins, Arial, sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DA498D')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
