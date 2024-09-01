import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the route where the signup page is hosted within the React app
    navigate('/signup-external'); // Adjust the route as needed
  }, [navigate]);

  return <h1>Wait,Redirecting to Signup...</h1>;
}

export default Signup;
