module.exports = {
    plugins: [ 'react' ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'jsx-quotes': [ 2, 'prefer-double' ],
        'react/display-name': 0,
        'react/jsx-boolean-value': [ 2, 'always' ],
        'react/jsx-no-undef': 2,
        'react/jsx-sort-props': 2,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-wrap-multilines': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': 2,
        'react/no-unknown-property': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/sort-prop-types': 2
    }
};
