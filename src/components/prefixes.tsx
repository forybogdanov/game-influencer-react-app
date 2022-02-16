export enum StyleClassPrefix {
    Campaign = "Campaign"
}

export const addPrefix = (prefix: string, className: string): string => `${prefix}-${className}`;