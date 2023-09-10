import { useEffect, useState } from 'react';

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const cursorStyles = {
    position: 'fixed',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'rgba(25, 25, 25, 0.5)',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(${cursorPosition.x - 8}px, ${cursorPosition.y - 8}px)`,
  };

  return <div className='basic-cursor' style={cursorStyles}></div>;
};

export default Cursor;
