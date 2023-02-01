/**
 * @description 'For simple data, you use it is better.（Object who not includes object type data）'
 * @param target
 */
export function deepCloneByStringfy<T extends object>(target: T): T {
  return target && JSON.parse(JSON.stringify(target))
}

/**
 * @description 'For complicated data, you use it is better.（Object who includes object type data）'
 * @param target
 */
export function deepClone<T extends Record<string, any>>(target: T): T {
  if (typeof target === 'object') {
    const reData = (Array.isArray(target) ? [] : {}) as T
    for (const key in target) {
      reData[key] = typeof target?.[key] === 'object' ? deepClone(target[key]) : target?.[key]
    }
    return reData
  } else {
    throw 'Target must be object'
  }
}

export function jsonToObject<T>(target: string, defV: unknown): T | typeof defV {
  return target ? JSON.parse(target) : defV
}
