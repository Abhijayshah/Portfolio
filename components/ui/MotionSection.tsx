'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface MotionSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
    children,
    className = '',
    delay = 0
}) => {
    const shouldReduceMotion = useReducedMotion();

    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay,
                ease: 'easeOut'
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionSection;
