# js-utils
Add some useful utils to your project. No more 'ctrl C V'

## Task completion

- [x] isFns

  is,
  isDef,
  isUnDef,
  isObject,
  isDate,
  isNull,
  isNumber,
  isString,
  isFunction,
  isPromise,
  isBoolean,
  isRegExp,
  isArray,
  isEmpty,
  isServer,
  isClient,
  isWindow,
  isElement,
  isImageDom,
  isTextarea,
  isMobile,
  isiOS,
  isAndroid,
  isWechat,
  isLine,
  isIOSWechat,
  isFacebook,
  isWhatsapp,
  isTwitter,
  isMac,
  isWin.

  > See use code at [js-utils/isFunctions.test.ts at main · laoer536/js-utils (github.com)](https://github.com/laoer536/js-utils/blob/main/test/isFunctions.test.ts) && [js-utils/isFunctions.client.test.ts at main · laoer536/js-utils (github.com)](https://github.com/laoer536/js-utils/blob/main/test/isFunctions.client.test.ts) 

- [x] dataFns

  deepCloneByStringfy,deepClone,jsonToObject,getRandomNumber,getRandomOneInArr,getRandomArr,getMapkeyedObj,getLengthArr.
  
  > See use code at [js-utils/data.test.ts at main · laoer536/js-utils (github.com)](https://github.com/laoer536/js-utils/blob/main/test/data.test.ts)
  
- [x] stringFns

  snakeCase,camelCase,kebabCase,pascalCase,splitByCase,lowerFirst,upperFirst.
  
  > See use code at [js-utils/string.test.ts at main · laoer536/js-utils (github.com)](https://github.com/laoer536/js-utils/blob/main/test/string.test.ts)
  
- [x] domFns(It should use in client)

  getUrlSearchParams,intersectionObserverElement,downloadFile,playAudio,fastCopy.
  
  > See use code at [js-utils/dom.test.ts at main · laoer536/js-utils (github.com)](https://github.com/laoer536/js-utils/blob/main/test/dom.test.ts)
  
- [ ] Other(Waiting for exploration)

## How to use

- npm 

  ```sql
  npm install js-utils-pro -D
  ```

- pnpm 

  ```sql
  pnpm install js-utils-pro -D
  ```

- yarn 

  ```sql
  yarn add js-utils-pro -D
  ```

In code, you can

```typescript
//way1
import {isFns} from 'js-utils-pro'
import {dataFns} from 'js-utils-pro'
isFns.isEmpty([]) //true
isFns.isNumber(222222) // true
const target = { name: 'laoer536', obj: { age: 1111, sex: 1 } }
const deepTarget = dataFns.deepClone(target)
//...
//Those methods are covered by test. They are safe and available.

//way2:
//when version >= 0.0.13 You also can
import {isEmpty,isNumber} from 'js-utils-pro/is'
import {deepClone} from 'js-utils-pro/data'
isEmpty([]) //true
isNumber(222222) // true
const target = { name: 'laoer536', obj: { age: 1111, sex: 1 } }
const deepTarget = deepClone(target)
//...
//Which way do we use? It's up to you. The 'way1' is categorized for easy memory and use. But I prefer to use 'way2', because it use 'import on demand' to get minimize size.
```

## Off Topic

If you discover some bugs when you use, please send some issues or 'pr', thanks a lot. I will continue to maintain this library.

[laoer536/js-utils: Add some useful utils to your project. No more 'ctrl C V' (github.com)](https://github.com/laoer536/js-utils/)

