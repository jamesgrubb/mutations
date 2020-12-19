module.exports = (elevetyConfig) => {
    elevetyConfig.addPassthroughCopy({'src/app.js':'app.js'})
    return{
        dir:{
            output: 'dist',
            input: 'src'
        }
    }
}