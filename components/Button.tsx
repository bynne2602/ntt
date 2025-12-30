import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-accent hover:scale-105 shadow-lg shadow-black/10",
    outline: "border border-gray-300 text-primary hover:bg-gray-50",
    ghost: "text-gray-600 hover:text-primary hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};