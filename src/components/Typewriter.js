import { useState, useEffect } from 'react';

export default function Typewriter({ text, speed = 100, delay = 3000, className = '' }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex >= text.length) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setCurrentIndex(text.length - 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex >= 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      }, speed / 2); // Delete faster than typing

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex < 0) {
      // Finished deleting, restart
      setIsDeleting(false);
      setCurrentIndex(0);
      setDisplayedText('');
    }
  }, [currentIndex, text, speed, delay, isDeleting]);

  return (
    <span className={className}>
      {displayedText}
      <span className="typewriter-cursor text-pink-500">|</span>
    </span>
  );
}

