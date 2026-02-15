import React from 'react';

// Variants: default, glass, gradient
const Card = ({ children, className = '', variant = 'default', ...props }) => {
    // Mapping variants to potential CSS classes
    // .about-item in global.scss is a card-like style
    // .blog is another

    return (
        <div className={`card ${variant} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
