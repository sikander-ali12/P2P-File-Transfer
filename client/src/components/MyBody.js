import React, { useState, useEffect } from 'react';
import './styles/mybody.css'; 

const MyBody = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [ipSent, setIpSent] = useState(false); // Track if IP has been sent

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);

        // Send IP address to local server if it hasn't been sent already
        if (!ipSent) {
          await fetch('http://localhost:5000/api/ip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip: data.ip }),
          });
          setIpSent(true); // Set to true after sending
        }
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();

    const handleUnload = async (event) => {
      try {
        if (ipSent) {
          await fetch('http://localhost:5000/api/ip', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip: ipAddress }),
          });
        }
      } catch (error) {
        console.error('Error deleting IP address:', error);
      }
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [ipAddress, ipSent]);

  return (
    <div className="body-container">
      <div className="avatar-container">
        <div className="avatar"></div>
        <h2>You: {ipAddress}</h2>
        <div className="circle-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </div>
    </div>
  );
};

export default MyBody;
