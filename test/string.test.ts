import { stringFns } from '../src'
import { describe, expect, test } from 'vitest'

describe('js-utils-stringFns', () => {
  test('stringFns', () => {
    expect(
      !!stringFns.snakeCase &&
        !!stringFns.camelCase &&
        !!stringFns.kebabCase &&
        !!stringFns.pascalCase &&
        !!stringFns.splitByCase &&
        !!stringFns.lowerFirst &&
        !!stringFns.upperFirst
    ).toBeTruthy()
  })

  test('stringFns-snakeCase', () => {
    expect(stringFns.snakeCase('foo-bar')).toEqual('foo_bar')
  })

  test('stringFns-camelCase', () => {
    expect(stringFns.camelCase('foo-bar')).toEqual('fooBar')
  })

  test('stringFns-kebabCase', () => {
    expect(stringFns.kebabCase('fooBar')).toEqual('foo-bar')
  })

  test('stringFns-pascalCase', () => {
    expect(stringFns.pascalCase('foo-bar')).toEqual('FooBar')
  })

  test('stringFns-splitByCase', () => {
    //separator default -> ['-', '_', '/', '.']
    expect(stringFns.splitByCase('foo-bar.laoer/536_sss')).toEqual(['foo', 'bar', 'laoer', '536', 'sss'])
    expect(stringFns.splitByCase('foo-bar.laoer/536_sss?name=liujie', ['-', '_', '/', '.', '?', '='])).toEqual([
      'foo',
      'bar',
      'laoer',
      '536',
      'sss',
      'name',
      'liujie',
    ])
    expect(stringFns.splitByCase('你&好', ['.'])).toEqual(['你&好'])
  })

  test('stringFns-lowerFirst', () => {
    console.log(stringFns.lowerFirst('Laoer536'))
    expect(stringFns.lowerFirst('Laoer536')).toEqual('laoer536')
  })
  test('stringFns-upperFirst', () => {
    expect(stringFns.upperFirst('laoer536')).toEqual('Laoer536')
  })
})
