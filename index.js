module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
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
        }
    },
    env: {
        browser: true,
        mocha: true,
        node: true
    },
    extends: [
        './rules/best-practices.js',
        './rules/import.js',
        './rules/mocha.js',
        './rules/possible-errors.js',
        './rules/react.js',
        './rules/strict.js',
        './rules/style.js',
        './rules/variables.js'
    ],
    globals: {
        expect: true
    },
    rules: {}
};
