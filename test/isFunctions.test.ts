import { expect, test, describe } from 'vitest'
import { isFns } from '../src'
describe('js-utils-isFns', () => {
  test('isFns should not be undefined', () => {
    expect(typeof isFns !== 'undefined').eq(true)
  })
  test('is test', () => {
    expect(isFns.is('', 'String')).eq(true)
    expect(isFns.is('', 'Date')).eq(false)
  })
  test('isDef test', () => {
    expect(isFns.isDef('')).eq(false)
    expect(isFns.isDef(undefined)).eq(true)
  })
  test('isUnDef test', () => {
    expect(isFns.isUnDef('')).eq(true)
    expect(isFns.isUnDef(undefined)).eq(false)
  })
  test('isObject test', () => {
    expect(isFns.isObject({})).eq(true)
    expect(isFns.isObject('isObject test')).eq(false)
  })
  test('isDate test', () => {
    expect(isFns.isDate(new Date())).eq(true)
    expect(isFns.isDate('isDate test')).eq(false)
  })
  test('isNull test', () => {
    expect(isFns.isNull(null)).eq(true)
    expect(isFns.isNull('isNull test')).eq(false)
  })
  /** need more test of number */
  test('isNumber test', () => {
    expect(isFns.isNumber(222222)).eq(true)
    expect(isFns.isNumber(22222n)).eq(false)
    expect(isFns.isNumber(Number(22222n))).eq(true)
    expect(isFns.isNumber('isNumber test')).eq(false)
  })
  test('isString test', () => {
    expect(isFns.isString(new Date())).eq(false)
    expect(isFns.isString('isString test')).eq(true)
  })
  test('isFunction test', () => {
    function namedFn() {
      return 3
    }
    const fns = [
      () => {
        return 3
      },
      () => 3,
      namedFn,
    ]
    for (const fn of fns) {
      expect(isFns.isFunction(fn)).eq(true)
    }
    expect(isFns.isFunction('isFunction test')).eq(false)
  })
  test('isPromise test', () => {
    function myPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('fail')
        }, 3000)
      })
    }
    expect(isFns.isPromise(Promise.resolve('isPromise test'))).eq(true)
    expect(isFns.isPromise(myPromise())).eq(true)
    expect(isFns.isPromise('isPromise test')).eq(false)
  })
  test('isBoolean test', () => {
    expect(isFns.isBoolean(true)).eq(true)
    expect(isFns.isBoolean(false)).eq(true)
    expect(isFns.isBoolean('isBoolean test')).eq(false)
  })
  test('isRegExp test', () => {
    expect(isFns.isRegExp(/ab+c/i)).eq(true)
    expect(isFns.isRegExp(new RegExp('ab+c', 'i'))).eq(true)
    expect(isFns.isRegExp('isRegExp test')).eq(false)
  })
  test('isArray test', () => {
    expect(isFns.isArray([])).eq(true)
    expect(isFns.isArray({})).eq(false)
    expect(isFns.isArray('isArray test')).eq(false)
  })
  test('isEmpty test', () => {
    expect(isFns.isEmpty([])).eq(true)
    expect(isFns.isEmpty({})).eq(true)
    expect(isFns.isEmpty(new Map())).eq(true)
    expect(isFns.isEmpty(new Set())).eq(true)
    expect(isFns.isEmpty(['a'])).eq(false)
    expect(isFns.isEmpty({ name: 'laoer536' })).eq(false)
    expect(isFns.isEmpty(new Map([['key', 'value']]))).eq(false)
    expect(isFns.isEmpty(new Set(['laoer536']))).eq(false)
  })
  test('isServer isClient test', () => {
    expect(isFns.isServer).eq(true)
    expect(isFns.isClient).eq(false)
  })

  test('isWindow test', () => {
    expect(isFns.isWindow()).eq(false)
  })
})
