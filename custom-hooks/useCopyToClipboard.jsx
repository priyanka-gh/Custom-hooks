import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    if (typeof text === 'string' || typeof text === 'number') {
      // Create a temporary textarea element to perform the copy operation
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
        setIsCopied(true);
      } catch (error) {
        console.error('Failed to copy:', error);
        setIsCopied(false);
      }

      // Clean up the temporary textarea
      document.body.removeChild(textarea);
    } 
    else {
      console.error('The text to be copied must be a string or a number.');
      setIsCopied(false);
    }
  };

  const resetIsCopied = () => {
    setIsCopied(false);
  };

  return { isCopied, copyToClipboard, resetIsCopied };
};

