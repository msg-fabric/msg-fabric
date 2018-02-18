import pkg from './package.json'
import {minify} from 'uglify-es'
import rpi_uglify from 'rollup-plugin-uglify'
import rpi_resolve from 'rollup-plugin-node-resolve'

const sourcemap = 'inline'
const plugins = [rpi_resolve({module: true, jsnext: true})]

const ugly = { warnings: true, output: {comments: false, max_line_len: 256}}
const prod_plugins = plugins.concat([rpi_uglify(ugly, minify)])

export default [
	{ input: 'code/msg-fabric-node.jsy',
		output: [
      { file: pkg.main, format: 'cjs', sourcemap },
      { file: pkg.module, format: 'es', sourcemap },
    ],
    external: ['crypto', 'url', 'stream', 'net', 'tls'], plugins },

	{ input: 'code/msg-fabric-browser.jsy',
		output: [
      { file: `cjs/msg-fabric-browser.js`, format: 'cjs', sourcemap },
      { file: `esm/msg-fabric-browser.js`, format: 'es', sourcemap },
    ],
    external: [], plugins },

    prod_plugins &&
      { input: 'code/msg-fabric-browser.jsy',
        output: { file: pkg.browser, name:'msg-fabric', format: 'umd', sourcemap },
        external: [], plugins: prod_plugins },
].filter(e => e)

