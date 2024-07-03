import React, { useEffect } from 'react';
import { useUser } from '../../common/user-context/user-context';
import { useNavigate } from 'react-router-dom';

export function Logout() {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      user.logout();
      navigate('/');
    }
  }, [user, navigate]);

  return <div>Logging you out...</div>;
}
