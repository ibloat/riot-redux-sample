import riot from 'rollup-plugin-riot'
import npm from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import bublec from 'buble'
import replace from 'rollup-plugin-replace'

export default {
  entry: 'src/index.js',
  format: 'iife',
  exports: 'none',
  sourceMap: false, // the riot plugin does not produce source maps :(
  plugins: [
    riot({
      parser: function(src) { return bublec.transform(src).code },
    }),
    npm({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    buble({
      target : {
        chrome: 49,
        firefox: 45,
        safari: 9,
        edge: 12,
        ie: 11
      }
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    })
  ]
}
