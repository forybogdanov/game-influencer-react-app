
export enum StyleClassPrefix {
    Campaign = "Campaign",
    Footer = "Footer",
    Header = "Header",
    Form = "Form"
}

export const addPrefix = (prefix: string, className: string): string => `${prefix}-${className}`;