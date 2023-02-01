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
export function deepClone<T = any>(target: T): T {
  if (typeof target === 'object') {
    const reData: any = Array.isArray(target) ? [] : {}
    let key: keyof typeof target
    for (key in target) {
      reData[key] = typeof target?.[key] === 'object' ? deepClone(target[key]) : target?.[key]
    }
    return reData as T
  } else {
    throw 'Target must be object'
  }
}

export function jsonToObject<T>(target: string, defV: unknown): T | typeof defV {
  return target ? JSON.parse(target) : defV
}

/**
 * @description notice: max >= min is need
 * @param min
 * @param max
 */
export function getRandomNumber(min: number, max: number) {
  return min + Math.floor((max - min) * Math.random())
}

/**
 * Will create a new arr, deep clone is deal
 * @param arr
 */
export function getRandomOneInArr(arr: any[]) {
  if (arr.length >= 1) {
    return deepClone(arr)[getRandomNumber(0, arr.length - 1)]
  } else {
    throw 'Array has at least one element'
  }
}

/**
 * Will create a new arr, deep clone is deal
 * @param arr
 */
export function getRandomArr<T extends unknown[]>(arr: T): T {
  return deepClone(arr).sort(() => 0.5 - Math.random())
}

/**
 * @description Map key operation for object.
 * @param target
 * @param mapKeys example ['name-value','age-label'], It means the 'name' key will change as 'value' key, and the 'age' key will change as 'label' key.
 * @param replace @default(false)||true:will replace origin key to new key. false:will add new key that will just inherit old keys' value.
 */
export function getMapkeyedObj<T>(target: { [key: string]: any }, mapKeys: string[], replace = false): T {
  const deepTarget = deepClone(target)
  for (const mapKeyStr of mapKeys) {
    const mapKeyArr = mapKeyStr.split('-')
    if (mapKeyArr[0] in deepTarget) {
      deepTarget[mapKeyArr[1]] = deepTarget[mapKeyArr[0]]
      if (replace) {
        delete deepTarget[mapKeyArr[0]]
      }
    } else {
      throw `Can't find '${mapKeyArr[0]}' key in origin target.`
    }
  }
  return deepTarget as T
}

/**
 * @description Generate an array of specified length.
 * @param length
 * @param callback
 */
// eslint-disable-next-line no-unused-vars
export function getLengthArr<T = undefined>(length: number, callback?: (index?: number) => T): T[] {
  return callback ? Array.from(Array(length)).map((value, index) => callback(index)) : Array.from(Array(length))
}
