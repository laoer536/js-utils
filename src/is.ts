const toString = Object.prototype.toString

export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isDef(val: unknown) {
  return typeof val !== 'undefined'
}

export function isUnDef(val: unknown) {
  return !isDef(val)
}

export function isObject(val: unknown) {
  return val !== null && is(val, 'Object')
}

export function isDate(val: unknown) {
  return is(val, 'Date')
}

export function isNull(val: unknown) {
  return val === null
}

export function isNumber(val: unknown) {
  return is(val, 'Number')
}

export function isString(val: unknown) {
  return is(val, 'String')
}

export function isFunction(val: unknown) {
  return typeof val === 'function'
}

export function isPromise(val: unknown) {
  if (is(val, 'Promise') && val instanceof Promise) {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch)
  } else {
    return false
  }
}

export function isBoolean(val: unknown) {
  return is(val, 'Boolean')
}

export function isRegExp(val: unknown) {
  return is(val, 'RegExp')
}

export function isArray(val: unknown) {
  return Boolean(val) && Array.isArray(val)
}

export function isWindow(val: unknown) {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isElement(val: unknown) {
  if (val instanceof Element) {
    return isObject(val) && !!val.tagName
  } else {
    return false
  }
}

export function isEmpty(val: unknown) {
  if (isArray(val) || isString(val)) {
    return (val as Array<unknown> | string).length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val as object).length === 0
  }

  return false
}

export const isServer = typeof window === 'undefined'

export const isClient = typeof window !== 'undefined'

export function isImageDom(o: Element) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName)
}

export function isTextarea(element: Element) {
  return element !== null && element.tagName.toLowerCase() === 'textarea'
}

export function isMobile() {
  return !!navigator.userAgent.match(
    // eslint-disable-next-line max-len
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
}

export function isiOS() {
  const u = navigator.userAgent
   // ios终端
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export function isAndroid() {
  const u = navigator.userAgent.toLowerCase()
  return u.includes('android') || u.includes('adr')
}

export function isWechat() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

export function isLine() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('line')
}

// export function isiOSWechat () {
//   return Boolean(window.__wxjs_is_wkwebview)
// }

// 判断是否在facebook内置浏览器
export function isFacebook() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('facebookexternalhit')
}

// 判断是否在whatsapp内置浏览器
export function isWhatsapp() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('whatsapp')
}

// 判断是否在twitter内置浏览器
export function isTwitter() {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('twitter')
}
