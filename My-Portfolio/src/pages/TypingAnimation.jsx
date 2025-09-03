import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping && charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100); // Speed of typing
      
      return () => clearTimeout(timer);
    } else if (isTyping && charIndex === currentRole.length) {
      // Finished typing current role, wait then start deleting
      const timer = setTimeout(() => {
        setIsTyping(false);
      }, 2000); // Wait 2 seconds before deleting
      
      return () => clearTimeout(timer);
    } else if (!isTyping && charIndex > 0) {
      // Deleting
      const timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50); // Speed of deleting
      
      return () => clearTimeout(timer);
    } else if (!isTyping && charIndex === 0) {
      // Finished deleting, move to next role
      const timer = setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }, 500); // Wait before starting next role
      
      return () => clearTimeout(timer);
    }
  }, [charIndex, isTyping, currentRoleIndex, roles]);

  return (
    <div className="typing-container">
      <span className="typing-text">
        {displayedText}
        <span className="cursor"></span>
      </span>
    </div>
  );
};

export default TypingAnimation;