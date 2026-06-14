import { AlertCircle } from "lucide-react";
import React from "react";

export type InputType = 'text' | 'email' | 'password' | 'number' | 'search';
export type InputSize = 'sm' | 'md' | 'lg';


export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    type?: InputType;
    size?: InputSize;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            fullWidth,
            wrapperClassName,
            size,
            error,
            leftIcon,
            rightIcon,
            disabled = false,
            ...rest
        },
        ref
    ) => {

        const baseContainerStyles =
            'flex items-center gap-2 border rounded-lg px-3 transition-all duration-200 w-full outline-none'
        const containerStateStyles = error
            ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-100'
            : 'border-gray-300'

        const containerDisabledStyles = disabled ? 'opacity-50 cursor-not-allowed bg-cinza-50' : ''

        const sizeStyles = {
            sm: 'min-h-[32px] text-sm',
            md: 'min-h-[40px] text-base',
            lg: 'min-h-[48px] text-lg',
        }

        const combinedContainerClasses = [
            baseContainerStyles,
            containerStateStyles,
            containerDisabledStyles,
            sizeStyles[size ?? 'md'],
            fullWidth ? 'w-full' : '',
            wrapperClassName,
        ].filter(Boolean).join(' ')

        const inputStyles = 'bg-transparent outline-none flex-1 min-w-0 placeholder:text-gray-400 leading-none'

        return (
            <div className="outline-none w-full">
                <div className={combinedContainerClasses}>
                    {leftIcon && <span className="shrink-0">{leftIcon}</span>}
                    <input className={inputStyles} ref={ref} type={type} disabled={disabled} {...rest} />
                    {rightIcon && <span className="shrink-0 ml-auto">{rightIcon}</span>}
                </div>
                {error && (
                    <span className="flex items-center gap-1 text-red-400 text-xs mt-1">
                        <AlertCircle size={12} />
                        {error}
                    </span>
                )}
            </div>
        )
    }
)

export default React.memo(Input);
