import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
          const response = await fetch('http://localhost:8000/student/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "access_code": code,
            }),
          });

          console.log(response.message);

          // Assuming the backend returns a successful response
          if (response.status === 200) {
            // Redirect to your application page on port 5173
            window.location.href = 'http://localhost:5173/';
          } else {
            // Handle unsuccessful login
            console.error('Login failed');
          }
        }
      } catch (error) {
        // Handle errors
        console.error('Error during login:', error);
      }
    };

    // Call the function to handle Microsoft authentication when the URL changes
    handleMicrosoftAuthentication();
  }, [location.search]);

  return (
    <div>
      <p>Processing authentication...</p>
    </div>
  );
};

export default CallBack;
