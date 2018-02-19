import pkg from './package.json'
import {minify} from 'uglify-es'
import rpi_uglify from 'rollup-plugin-uglify'
import rpi_gzip from "rollup-plugin-gzip"
import rpi_resolve from 'rollup-plugin-node-resolve'

const sourcemap = 'inline'
const plugins = [rpi_resolve({module: true, jsnext: true})]

const ugly = { warnings: true, output: {comments: false, max_line_len: 256}}
const prod_plugins = plugins.concat([
  rpi_uglify(ugly, minify),
  rpi_gzip({ options: {level: 9 } }),
])

export default [
	{ input: 'code/node.jsy',
		output: [
      { file: pkg.main, format: 'cjs', sourcemap },
      { file: pkg.module, format: 'es', sourcemap },
      { file: `cjs/node.js`, format: 'cjs', sourcemap },
      { file: `esm/node.js`, format: 'es', sourcemap },
    ],
    external: ['crypto', 'url', 'stream', 'net', 'tls'], plugins },

	{ input: 'code/browser.jsy',
		output: [
      { file: `cjs/browser.js`, format: 'cjs', sourcemap },
      { file: `esm/browser.js`, format: 'es', sourcemap },
      { file: `umd/msg-fabric.js`, format: 'umd', sourcemap, name:'msg-fabric' },
    ],
    external: [], plugins },

    prod_plugins &&
      { input: 'code/browser.jsy',
        output: { file: pkg.browser, format: 'umd', name:'msg-fabric' },
        external: [], plugins: prod_plugins },
].filter(e => e)

