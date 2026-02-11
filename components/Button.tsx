import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border border-transparent shadow-[0px_2px_4px_rgba(0,0,0,0.1),0px_4px_16px_rgba(0,0,0,0.1)]",
    secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    outline: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:text-black shadow-sm",
    ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-gray-100",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 h-8",
    md: "text-sm px-4 py-2 h-10",
    lg: "text-base px-6 py-2.5 h-12",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};