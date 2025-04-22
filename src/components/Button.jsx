function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  onClick,
  ...props 
}) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    danger: 'btn-danger'
  };
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };
  
  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;