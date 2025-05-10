import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    emphasize?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, emphasize = true, type = 'button', ...props }) => {
    const emphasisStyles = emphasize
        ? 'bg-[#000f1e] text-white hover:bg-navy focus:outline-none focus:ring-2 focus:ring-navy'
        : 'bg-gray-200 text-navy border-navy border font-medium hover:bg-navy focus:outline-none focus:ring-2 focus:bg-navy';

    return (
        <button 
            type={type} 
            className={`px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 ${emphasisStyles}`} 
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;