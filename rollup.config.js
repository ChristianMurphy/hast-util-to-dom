import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    babel({
      presets: [
        ['env', { modules: false }],
      ],
      babelrc: false,
    }),
  ],
  external: ['property-information'],
};
