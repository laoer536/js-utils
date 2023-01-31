/**
 * @description 'For simple data, you use it is better.（Object who not includes object type data）'
 * @param target
 */
export function deepCloneByStringfy<T extends object>(target: T): T {
  return target && JSON.parse(JSON.stringify(target))
}

/**
 * @description 'For complicated data, you use it is better.（Object who  includes object type data）'
 * @param target
 */
export function deepClone<T extends object>(target: T): T {
  const reData = Array.isArray(target) ? [] : {}
 for(const key in target){
   reData[key] =
 }
  return reData
}

export function jsonToObject(target: string, defV: unknown) {
  return target ? JSON.parse(target) : defV
}
