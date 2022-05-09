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
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        'no-unused-vars': 'off',
        'no-invalid-this': 'off',
        'require-jsdoc': 'off',
        'quote-props': ['warn', 'consistent-as-needed'],
        'react/jsx-indent': ['warn', 2],
        'react/jsx-indent-props': ['warn', 2],
        'quotes': ['warn', 'single'],
    }
};
