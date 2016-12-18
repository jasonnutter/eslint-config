module.exports = {
    parser: 'babel-eslint',
    ecmaFeatures: {
        arrowFunctions: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        forOf: true,
        generators: false,
        modules: true,
        objectLiteralComputedProperties: true,
        objectLiteralDuplicateProperties: false,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        spread: true,
        superInFunctions: true,
        templateStrings: true
    },
    'env': {
        'browser': true,
        'node': true,
        'mocha': true
    },
    extends: [
        './rules/react.js',
        './rules/best-practices.js',
        './rules/import.js',
        './rules/mocha.js',
        './rules/possible-errors.js',
        './rules/strict.js',
        './rules/style.js',
        './rules/variables.js'
    ],
    rules: {}
};
