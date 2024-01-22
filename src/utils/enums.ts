
export function randomEnumValue(anEnum: {[x: string]: any})
{
    const values = Object.keys(anEnum)
    const key = values[Math.floor(Math.random() * values.length)]
    return anEnum[key]
}

// BETTER
export function randomEnum<T>(anEnum: T): T[keyof T]
{
    const values = Object.keys(anEnum)
        .map(n => Number.parseInt(n))
        .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    
    const key = Math.floor(Math.random() * values.length)
    return values[key]
}

export function getBackedEnumValues(anEnum: {[s: string]: string}|ArrayLike<unknown>): string[]|unknown[]
{
    return Object.values(anEnum).filter(key => isNaN(Number(key)))
}