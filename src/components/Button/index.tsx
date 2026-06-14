import React from "react";
import type { ButtonProps } from "./button.types";
import { Spinner } from "../Spinner";

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    className = '',
    ...props
}) => {
    const isDisabled = disabled || loading;

    const baseStyles =
        'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
        primary:
            'bg-gradient-to-r from-magenta-500 to-magenta-600 text-white hover:from-magenta-600 hover:to-magenta-700 focus:ring-magenta-500 shadow-md hover:shadow-lg hover:shadow-magenta-glow',
        secondary:
            'bg-azul-500 text-white hover:bg-azul-600 focus:ring-azul-500 shadow-md hover:shadow-lg',
        outline: 'border border-graphite-600 text-white hover:bg-graphite-800 focus:ring-graphite-500 hover:opacity-80 transition cursor-pointer',

        ghost: 'text-grafite-700 hover:bg-cinza-100 focus:ring-cinza-300 cursor-pointer',
    };

    const sizeStyles = {
        sm: 'text-sm px-3 py-1.5 min-h-[32px]',
        md: 'text-base px-4 py-2 min-h-[40px]',
        lg: 'text-lg px-6 py-3 min-h-[48px]',
    };

    const combinedClasses = [
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={combinedClasses} disabled={isDisabled} {...props}>
            {loading ? <Spinner /> : leftIcon}
            {children}
            {!loading && rightIcon}
        </button>
    )
}

export default React.memo(Button)