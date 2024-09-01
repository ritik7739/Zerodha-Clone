import React, { useEffect } from 'react';

function Signup() {
  useEffect(() => {
    // Redirect to an external URL
    window.location.href = 'https://zerodha-signup.onrender.com'; // Adjust the URL as needed
  }, []);

  return <h1>Wait, redirecting to Signup...</h1>;
}

export default Signup;
