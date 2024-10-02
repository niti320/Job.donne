// Simplified NavigationContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const routes = useNavigationState(state => state?.routes || []);
  const [currentRoute, setCurrentRoute] = useState('Home');

  useEffect(() => {
    if (routes.length > 0) {
      setCurrentRoute(routes[routes.length - 1]?.name || '');
    }
  }, [routes]);

  return (
    <NavigationContext.Provider value={{ currentRoute }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  return useContext(NavigationContext);
}
