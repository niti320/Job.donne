import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('Mr. N'); // Default username
  const [userImage, setUserImage] = useState(null); // Default user image

  return (
    <UserContext.Provider value={{ username, setUsername, userImage, setUserImage }}>
      {children}
    </UserContext.Provider>
  );
};