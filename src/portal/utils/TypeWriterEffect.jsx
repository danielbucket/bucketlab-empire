import { useState, useEffect } from "react";

export const TypeWriterEffect = ({ text, speed }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText((prevText) => prevText + text.charAt(currentIndex))
        setCurrentIndex((prevIndex) => prevIndex + 1)
      } else {
        clearInterval(intervalId)
      }
    }, speed)

    return () => clearInterval(intervalId);
  }, [currentIndex, text, speed]);

  return <p>{typedText}</p>
};