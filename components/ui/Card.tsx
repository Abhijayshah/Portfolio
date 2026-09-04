import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'gradient';
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    variant = 'default',
    ...props
}) => {
    return (
        <div className={`card ${variant} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;
