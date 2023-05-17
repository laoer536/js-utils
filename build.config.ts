import { defineBuildConfig } from 'unbuild'
export default defineBuildConfig({
  name: 'js-utils-pro',
  entries: ['./src/index', './src/is', './src/data', './src/string', './src/dom'],
  declaration: true,
  clean: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
})
