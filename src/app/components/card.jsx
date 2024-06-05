// components/Card.jsx
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '20px',
  marginBottom: '10px',
  cursor: 'pointer', // Add cursor pointer to indicate it's clickable
};

const Card = ({ id, author, date, title, description }) => {
  const router = useRouter();
  // Function to handle card click
  // Function to handle card click
const handleClick = () => {
  // Generate the route dynamically
  const route = `/${title.toLowerCase().split(' ').join('-')}`;
  // Navigate to the route
  router.push(route);
};


  return (
    <div style={cardStyle} onClick={handleClick}>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;

