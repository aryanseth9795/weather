import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Done() {
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  return (
    <div className='contact-container'> 
    <h1>
        Your Form Is Successfully Submitted 
    </h1>
    </div>
  )
}
