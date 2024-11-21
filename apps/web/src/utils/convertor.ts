// For converting string From CamelCase or SnakeCase to SpaceCase
export function toSpaceCase(str: string): string {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
}   