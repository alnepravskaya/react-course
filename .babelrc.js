module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                development: process.env.BABEL_ENV === 'development',
            },
        ],
    ],
    'env': {
        'test': {
            'plugins': ['@babel/plugin-transform-modules-commonjs']
        }
    }
};

