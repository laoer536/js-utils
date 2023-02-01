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
    expect(() => dataFns.deepClone(target)).not.toThrow('Target must be object')
  })
})
