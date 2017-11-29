import rpi_babel from 'rollup-plugin-babel'
import rpi_resolve from 'rollup-plugin-node-resolve'

const sourcemap = 'inline'

const external = ['crypto', 'url', 'stream', 'net', 'tls']

const plugins = [jsy_plugin(), rpi_resolve({module: true, jsnext: true})]

export default [
	{ input: 'code/msg-fabric-node.jsy',
		output: [
      { file: `dist/msg-fabric-node.js`, format: 'cjs' },
      { file: `dist/msg-fabric-node.mjs`, format: 'es' },
    ],
    sourcemap, external, plugins },

	{ input: 'code/msg-fabric-browser.jsy',
    name: 'msg-fabric-browser',
		output: [
      { file: `dist/msg-fabric-browser.js`, format: 'cjs' },
      { file: `dist/msg-fabric-browser.mjs`, format: 'es' },
      { file: `dist/msg-fabric-browser.umd.js`, format: 'umd' },
    ],
    sourcemap, external, plugins },
]




function jsy_plugin() {
  const jsy_preset = [ 'jsy/lean', { no_stage_3: true, modules: false } ]
  return rpi_babel({
    exclude: 'node_modules/**',
    presets: [ jsy_preset ],
    plugins: [],
    babelrc: false }) }

