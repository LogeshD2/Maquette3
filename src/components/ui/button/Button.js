import React from 'react';

export default function Button({
  label,         
  type = "button", 
  onClick,        
  className,     
  disabled = false,
  variant = "primary",
  size = "medium",
  ...props       
}) {

  const baseStyles = "rounded-md font-medium transition-all duration-300";

  const variantStyles = {
    primary: "bg-primary text-white border-primary",
    secondary: "bg-secondary text-white border-secondary", 
    outline: "bg-transparent border-primary text-primary", // Bordure pour outline
  };

  // Styles spécifiques aux tailles
  const sizeStyles = {
    small: "px-2 py-1 text-sm",  
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg", 
  };

  return (
    <button
      type={type}
      onClick={onClick} 
      disabled={disabled} 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} 
      {...props}
    >
      {label}
    </button>
  );
}
