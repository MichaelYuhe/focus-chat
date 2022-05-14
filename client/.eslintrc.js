module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react', 'import'],
    rules: {
        'no-unused-vars': 'off',
        'no-invalid-this': 'off',
        'require-jsdoc': 'off',
        'react/prop-types': 'off',
        'react/display-name': 'off',
        'quote-props': ['warn', 'consistent-as-needed'],
        'react/jsx-indent': ['warn', 2],
        'react/jsx-indent-props': ['warn', 2],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'object-curly-newline': ['warn', { multiline: true }],
        'object-curly-spacing': ['warn', 'always'],
        'comma-spacing': ['warn', { before: false, after: true }],
        'no-multi-spaces': ['warn'],
        'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1, maxBOF: 0 }],
        'eol-last': 1,
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
        'array-element-newline': ['warn', 'consistent'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'array-bracket-newline': ['warn', { multiline: true }],
        'no-trailing-spaces': 'warn',
        'space-in-parens': ['warn', 'never'],
    }
};
