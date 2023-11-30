export function isEnumValue<T extends {}>(
  enumeration: T,
  value: unknown
): value is T[keyof T] {
  return Object.values(enumeration).includes(value)
}

export function getEnumValue<T extends {}>(
  enumeration: T,
  value: unknown
): T[keyof T] | undefined {
  if (isEnumValue(enumeration, value)) return value
  return undefined
}
