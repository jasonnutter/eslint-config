module.exports = {
    plugins: [
        'import'
    ],
    settings: {
        'import/resolve': {
            extensions: [ '.js', '.jsx', '.json' ]
        }
    },
    rules: {
        'import/default': 0,
        'import/export': 2,
        'import/imports-first': 2,
        'import/named': 0,
        'import/no-extraneous-dependencies': 2,
        'import/no-unresolved': 2
    }
};
