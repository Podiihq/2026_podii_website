import React from 'react';

const Spinner = ({ size = 'large', borderClass = 'border-[#1E1E1E]', className = '' }) => {
    const sizeClasses = {
        small: 'w-4 h-4',
        medium: 'w-8 h-8',
        large: 'w-12 h-12',
    };

    return (
        <div
            className={`inline-block align-middle animate-spin rounded-full border-4 ${borderClass} border-t-transparent ${sizeClasses[size]} ${className}`}
        />
    );
};

export default Spinner;