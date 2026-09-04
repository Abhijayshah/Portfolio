import React from 'react';

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'default';
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    href = '#',
    ...props
}) => {
    return (
        <a
            href={href}
            onClick={(e) => {
                if (href === '#' || href === '') {
                    e.preventDefault();
                }
                if (onClick) onClick(e);
            }}
            className={`main-btn ${variant} ${className}`}
            {...props}
        >
            <span className="btn-text">{children}</span>
        </a>
    );
};

export default Button;
