const path = require('path');

module.exports = {
  entry: './script.js', // Archivo de entrada (punto de inicio)
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de destino
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Regla para archivos HTML
        use: ['html-loader'], // Cargador para procesar el HTML
      },
    ],
  },
};
