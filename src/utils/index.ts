export const isBlankObject = (obj: object) => {
    return Object.keys(obj || {}).length === 0
}
