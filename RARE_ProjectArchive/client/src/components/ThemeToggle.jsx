import React, { useState, useEffect } from 'react';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} style={styles.button}>
      <img
        src={theme === 'light' ? moonIcon : sunIcon}
        alt={theme === 'light' ? 'Dark mode' : 'Light mode'}
        style={styles.icon}
      />
    </button>
  );
};

const styles = {
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '10px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default ThemeToggle;
