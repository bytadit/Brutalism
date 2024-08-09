"use client";
import React, { useState } from 'react';
import clsx from 'clsx';
import { FaCopy } from "react-icons/fa";

const buttonClasses = 'flex items-center text-xs px-1.5 py-1 font-bold text-[#FCF1D8] rounded border border-[#FCF1D8]';

interface CopyButtonProps {
  text: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className={clsx(buttonClasses, className)}
    >
      {/* <Icon className="mr-1 h-4 w-4" /> */}
      <span>{isCopied ? 'Copied!' : 'Copy'}</span>
    </button>
  );
};

export default CopyButton;
