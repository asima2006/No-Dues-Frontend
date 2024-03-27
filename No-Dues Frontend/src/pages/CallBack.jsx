import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { backendUri } from '../env';

const
CallBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMicrosoftAuthentication = async () => {
      try {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');

        if (code) {
          const response = await fetch(`${backendUri}/student/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "access_code": code,
            }),
          });

          console.log(response.statusText);

          if (response.status === 200) {
            // window.location.href = 'http://localhost:5173/';
            navigate('/')
          } else {
            console.error('Login failed');
          }
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };

    handleMicrosoftAuthentication();
  }, [location.search]);

  return (
    <div>
      <p>Processing authentication...</p>
    </div>
  );
};

export default CallBack;
