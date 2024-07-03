import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getApiUrl } from '../../../util/util';

const tokenTitle = 'RouteAlert';

export enum UserTypes {
  User,
  Admin
};

export interface UserObject {
  token: string
  userType: UserTypes
};

interface UserContextType {
  user: UserObject | null
  login: (token: string, userType: UserTypes, rememberMe: boolean) => void
  logout: () => void
  loading: boolean
}

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<UserObject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkExistingToken = async () => {
      const token = localStorage.getItem(tokenTitle);
      if (token) {
        try {
          await axios.post(`${getApiUrl()}/api/users/validate`, token)
            .then((response) => {
              try {
                const { token, userType } = response.data;
                setUser({ token, userType });
              } catch (error) {
                localStorage.removeItem(tokenTitle);
                setUser(null);
              }
            })
            .catch(() => {
              localStorage.removeItem(tokenTitle);
              setUser(null);
            })
            .finally(() => setLoading(false));
        } catch (error) {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    }
    void checkExistingToken();
  }, []);

  const login = (token: string, userType: UserTypes, rememberMe: boolean) => {
    setUser({ token, userType });
    if (rememberMe) {
      localStorage.setItem(tokenTitle, token);
    }
  };

  const logout = () => {
    localStorage.removeItem(tokenTitle);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};
