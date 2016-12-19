module.exports = {
    plugins: [ 'import' ],
    settings: {
        'import/resolve': {
            extensions: [ '.js', '.jsx', '.json' ]
        }
    },
    rules: {
        'import/default': 0,
        'import/export': 2,
        'import/extensions': 2,
        'import/imports-first': 2,
        'import/named': 2,
        'import/newline-after-import': 2,
        'import/no-commonjs': 0,
        'import/no-duplicates': 2,
        'import/no-dynamic-require': 2,
        'import/no-extraneous-dependencies': 2,
        'import/no-mutable-exports': 2,
        'import/no-named-as-default': 2,
        'import/no-named-as-default-member': 2,
        'import/no-unresolved': 2
    }
};
