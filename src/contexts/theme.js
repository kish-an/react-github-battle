import React from 'react';

// No longer destructuring Consumer & Provider as the useContext hook requires the context object createContext returns
const ThemeContext = React.createContext();
export const ThemeProvider = ThemeContext.Provider;

export default ThemeContext;
