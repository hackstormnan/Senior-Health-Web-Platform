import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();



export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [username, saveUsername] = useState('');

  useEffect(() => {
    // 尝试从本地存储获取用户名
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      saveUsername(savedUsername);
    }
  }, []);

  const storeUsername = (newUsername) => {
    saveUsername(newUsername);
    // 同时将用户名保存到本地存储
    localStorage.setItem('username', newUsername);
  };


  const value = {
    username,
    saveUsername: storeUsername
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}


