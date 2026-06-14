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
