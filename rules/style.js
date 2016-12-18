module.exports = {
    'rules': {
        'indent': [2, 4],
        'brace-style': [2, '1tbs', {
            'allowSingleLine': true
        }],
        'quotes': [
            2, 'single', 'avoid-escape'
        ],
        'camelcase': [2, {
            'properties': 'never'
        }],
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'eol-last': 2,
        'func-names': 0,
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'new-cap': [0, {
            'newIsCap': true
        }],
        'no-multiple-empty-lines': [2, {
            'max': 2
        }],
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-extra-parens': [2, 'functions'],
        'no-mixed-spaces-and-tabs': 2,
        'no-underscore-dangle': 0,
        'one-var': [2, 'never'],
        'padded-blocks': [0, 'never'],
        'semi': [2, 'always'],
        'semi-spacing': [2, {
            'before': false,
            'after': true
        }],
        'keyword-spacing': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            'anonymous': 'always',
            'named': 'never'
        }],
        'space-infix-ops': 2,
        'spaced-comment': 2
    }
};
