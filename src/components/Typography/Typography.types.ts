import React from "react";

export type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export type TypographyVariant =
    | 'display'
    | 'heading'
    | 'title'
    | 'body'
    | 'caption'
    | 'overline';

export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export interface TypographyProps {
    as?: TypographyElement;
    variant?: TypographyVariant;
    weight?: TypographyWeight;
    color?: string;
    gradient?: boolean;
    align?: TypographyAlign;
    className?: string;
    children: React.ReactNode;
}