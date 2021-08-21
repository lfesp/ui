const path = require('path')
module.exports = {
    title: 'Hoagie UI Style Guide',
    components: 'src/components/**/*.tsx',
    styleguideDir: 'docs',
    skipComponentsWithoutExample: true,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/components/Theme')
    },
    require: [
        path.join(__dirname, 'src/components/Theme/Theme.module.css')
    ],
    theme: {
        fontFamily: {
            base: '"Nunito", sans-serif'
        },
    },
};