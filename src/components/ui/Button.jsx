import React from 'react';
import '../../styles/global.scss'; // Ensure access to variables if needed (though variables are global)

// Variants: primary, secondary, outline
const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    // We can map variants to existing CSS classes or inline styles
    // The existing main-btn class corresponds to an outline-ish style with hover fill.

    // For this implementation, I'll allow passing specific classes or combining styles.
    // Given the global.scss, 'main-btn' is the primary style. 

    return (
        <a
            href="#"
            onClick={(e) => { e.preventDefault(); onClick && onClick(e); }}
            className={`main-btn ${variant} ${className}`}
            {...props}
        >
            <span className="btn-text">{children}</span>
            {/* Icon handling can be done via children or props, but keeping it simple for now */}
        </a>
    );
};

export default Button;
