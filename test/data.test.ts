import { expect, test, describe } from 'vitest'
import { dataFns } from '../src'
describe('js-utils-dataFns', () => {
  test('deepCloneByStringfy', () => {
    const target = { name: 'laoer536', obj: { age: 1111, sex: 1 } }
    const arr = [1, { age: 1111, sex: 1 }, 'ssss']
    expect(dataFns.deepCloneByStringfy(target)).not.toBe(target)
    expect(dataFns.deepCloneByStringfy(target).obj).not.toBe(target.obj)
    expect(dataFns.deepCloneByStringfy(arr)).not.toBe(arr)
    expect(dataFns.deepCloneByStringfy(arr)[1]).not.toBe(arr[1])
    expect(dataFns.deepCloneByStringfy(target)).toEqual(target)
    expect(target).toBe(target)
  })

  test('jsonToObject', () => {
    const targetStr = JSON.stringify({ name: 'laoer536', obj: { age: 1111, sex: 1 } })
    const arr = JSON.stringify([1, { age: 1111, sex: 1 }, 'ssss'])
    expect(dataFns.jsonToObject(arr, {})).toEqual([1, { age: 1111, sex: 1 }, 'ssss'])
    expect(dataFns.jsonToObject(targetStr, {})).toEqual({ name: 'laoer536', obj: { age: 1111, sex: 1 } })
    expect(dataFns.jsonToObject('', {})).toEqual({})
    expect(dataFns.jsonToObject('', [])).toEqual([])
  })

  test('deepClone', () => {
    const target = { name: 'laoer536', obj: { age: 1111, sex: 1 } }
    const arr = [1, { age: 1111, sex: 1 }, 'ssss']
    expect(dataFns.deepClone(target)).not.toBe(target)
    expect(dataFns.deepClone(arr)).not.toBe(arr)
    expect(dataFns.deepClone(arr)[1]).not.toBe(arr[1])
    expect(dataFns.deepClone(target).obj).not.toBe(target.obj)
    expect(dataFns.deepClone(target)).toEqual(target)
    expect(target).toBe(target)
    expect(() => dataFns.deepClone('')).toThrow('Target must be object')
    expect(() => dataFns.deepClone(target)).not.toThrow('Target must be object')
  })

  test('getRandomNumber', () => {
    expect(dataFns.getRandomNumber(0, 0)).toEqual(0)
    const res = dataFns.getRandomNumber(-20, 20)
    expect(res >= -20 && res <= 20).toEqual(true)
  })

  test('getRandomOneInArr', () => {
    const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10]
    expect(arr.includes(dataFns.getRandomOneInArr(arr))).toEqual(true)
    expect(() => dataFns.getRandomOneInArr([])).toThrow('Array has at least one element')
  })

  test('getRandomArr', () => {
    const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10]
    expect(dataFns.getRandomArr(arr).every((value) => arr.includes(value))).toEqual(true)
    expect(dataFns.getRandomArr(arr)).not.toBe(arr)
  })

  test('getMapkeyedObj', () => {
    const obj = { name: 'laoer536', age: 12, other: 'ssss' }
    const resObjReplace = { label: 'laoer536', value: 12, other: 'ssss' }
    const resObjNotReplace = { name: 'laoer536', age: 12, label: 'laoer536', value: 12, other: 'ssss' }
    expect(dataFns.getMapkeyedObj(obj, ['name-label', 'age-value'])).toEqual(resObjNotReplace)
    expect(dataFns.getMapkeyedObj(obj, ['name-label', 'age-value'], false)).toEqual(resObjNotReplace)
    expect(dataFns.getMapkeyedObj(obj, ['name-label', 'age-value'], true)).toEqual(resObjReplace)
    expect(dataFns.getMapkeyedObj(obj, ['name-label', 'age-value'])).not.toBe(obj)
    expect(() => dataFns.getMapkeyedObj(obj, ['sex-label', 'age-value'])).toThrow(
      `Can't find 'sex' key in origin target.`
    )
  })

  test('getLengthArr', () => {
    expect(dataFns.getLengthArr(50).length).toEqual(50)
    expect(Array.isArray(dataFns.getLengthArr(50))).toEqual(true)
    expect(dataFns.getLengthArr(50, () => 1).every((value) => value === 1)).toEqual(true)
    expect(dataFns.getLengthArr(50).every((value) => value === undefined)).toEqual(true)
  })
})
