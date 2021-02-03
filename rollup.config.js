import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: "./front/index.tsx",
  output: {
    file: "./dist/front.js",
    format: "iife",
  },
  plugins: [
    nodeResolve(),
    commonjs({
      include: /node_modules/,
    }),
    typescript({ tsconfig: './tsconfig.front.json' }),
    injectProcessEnv({
      NODE_ENV: 'production',
    }),
  ],
}
