module.exports = {
    roots: ['./src'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    testRegex: '((\\.|/*.)(test))\\.(js|jsx)?$',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['./src/setupTests.js'],
    moduleNameMapper: {
        '^.+\\.(css|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/config/image.js',

    },
    collectCoverageFrom: [
        'src/**/*.jsx'
    ]

};

