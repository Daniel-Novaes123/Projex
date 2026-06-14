import type { TypographyProps } from './Typography.types';
import React from 'react';

const Typography: React.FC<TypographyProps> = ({
    as: Element = 'p',
    variant = 'body',
    weight = 'normal',
    color = 'text-grafite-900',
    gradient = false,
    align = 'left',
    className = '',
    children,
}) => {
    // Variant styles
    const variantStyles = {
        display: 'text-5xl md:text-6xl lg:text-7xl',
        heading: 'text-3xl md:text-4xl',
        title: 'text-xl md:text-2xl',
        body: 'text-base md:text-lg',
        caption: 'text-sm',
        overline: 'text-xs uppercase tracking-wide',
    };

    // Weight styles
    const weightStyles = {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
    };

    // Align styles
    const alignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };

    // Combine classes
    const combinedClasses = [
        variantStyles[variant],
        weightStyles[weight],
        alignStyles[align],
        gradient ? 'text-gradient-primary' : color,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return <Element className={combinedClasses}>{children}</Element>;
};
export default React.memo(Typography);
