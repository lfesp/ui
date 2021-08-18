const path = require('path')
module.exports = {
    components: 'src/components/**/*.tsx',
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/theme/Theme')
    },
    require: [
        path.join(__dirname, 'src/theme/index.css')
    ],
    theme: {
        fontFamily: {
            base: '"Nunito", sans-serif'
        },
    },
};