const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'noise',
      fileName: 'noise',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      }
    }
  }
}