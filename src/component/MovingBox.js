import React from 'react'
import { useState } from 'react';
import './MovingBox.css'

const MovingBox = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveLeft = () => {
    setPosition(prevPosition => ({
      ...prevPosition,
      left: prevPosition.left - 50 
    }));
  };
  const moveRight = () => {
    setPosition(prevPosition => ({
      ...prevPosition,
      left: prevPosition.left + 50 
    }));
  };

  const moveTop = () => {
    setPosition(prevPosition => ({
      ...prevPosition,
      top: prevPosition.top - 50 
    }));
  };
  const moveDown = () => {
    setPosition(prevPosition => ({
      ...prevPosition,
      top: prevPosition.top + 50 
    }));
  };
  return (
    <div>
      <div className='main_container'>
        <button className='horizontal' onClick={moveTop} disabled={position.top === 0}>up</button>
        <div className='container'>
          <button className='vertical' onClick={moveLeft} disabled={position.left === 0}>left</button>
          <div className='main'>
            <div className='box' style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}></div>
          </div>
          <button className='vertical' onClick={moveRight} disabled={position.left === 450}>right</button>
        </div>
        <button className='horizontal' onClick={moveDown} disabled={position.top === 450}>down</button>
      </div>
    </div>
  )
}

export default MovingBox
