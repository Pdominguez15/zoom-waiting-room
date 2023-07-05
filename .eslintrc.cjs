module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended'
    ],
    // Specifying Parser
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: '.eslintrc.cjs' },

    // Configuring third-party plugins
    plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        // Disallow the `any` type.
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/ban-types': [
            'error',
            {
                'extendDefaults': true,
                'types': {
                    '{}': false
                }
            }
        ],

        //Configure react
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-no-bind': [
            'warn',
            {
                'ignoreDOMComponents': false,
                'ignoreRefs': false,
                'allowArrowFunctions': false,
                'allowFunctions': true,
                'allowBind': false
            }
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line'
            }
        ],
        'react/display-name': 'warn',
        'react/prop-types': 'off',
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true,
                'allowTemplateLiterals': false
            }
        ],
        'max-len': [
            'error',
            {
                'code': 160
            }
        ],
        'react/no-this-in-sfc': 'error',
        'no-trailing-spaces': ['warn'],
        'react-hooks/rules-of-hooks': 'warn'
    }
};
