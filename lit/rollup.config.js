import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'components/word-count-paragraph.js',
    output: {
        file: 'build/js/word-count-paragraph.min.js',
        format: 'esm',
    },
    plugins: [
        nodeResolve()
    ]
};
