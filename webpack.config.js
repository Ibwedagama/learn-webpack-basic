// ?? karena menggunakan node.js maka harus dilakukan require("path")
// ?? "path" sendiri merupakan module bawaaan dari node.js
const path = require("path")

// webpack harus dibungkus dengan expression `module.exports`
module.exports = {
  // ?? development mode membuat hasil bundle dari webpack berisi informasi - informasi lebih
  // ?? selain `development` mode, terdapat pula mode `production` yang akan membuat bundle lebih kecil
  mode: "development",


  // ?? entry adalah file js utama yang akan di bundle oleh webpack, path nya relatif terhadap posisi `webpack.config.js`
  entry: './src/index.js',

  // ?? output adalah keluaran dari hasil bundle yang dilakukan oleh webpack
  output: {

    // ?? `filename` merujuk kepada nama file yang akan dibuat oleh webpack sebagai hasil bundle
    filename: 'bundle.js',

    // ?? `path` adalah lokasi dimana file hasil bundle akan ditaruh
    // ?? karena berjalan di node.js maka harus menggunakan ekspresi `path.resolve`
    // ?? untuk melakukan output, kita harus import (require()) package `path` ini diawal
    path: path.resolve(__dirname, 'public')
  },

  module: {
    // didalam objek module, terdapat sebuah array rules yang berisi objek - objek
    rules: [
      {
        // cek seluruh file yang berakhir dengan ekstensi .js
        test: /\.js$/,
        // kecuali segala sesuatu didalam node_modules
        exclude: /node_modules/,
        // kemudian gunakan loader ini
        // ?? tanpa konfigurasi tambahan, ini akan mereferensi kepada file .babelrc
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  // ?? `source-map` akan menggenerate file `main.js.map`, dimana akan memudahkan developer saat melakukan debugging, 
  // ?? karena tiap function yang digunakan akan diperlihatkan dengan lebih jelas pada devtool browser
  devtool: "source-map",

  // ?? menambahkan `devServer` untuk membuat local development server sendiri
  devServer: {

    // ?? content yang akan di-serve berada pada folder `dist`
    // ?? (dapat kita tentukan sesuai kebutuhan, tapi defaultnya adalah folder `dist`)
    contentBase: "./dist"
  }

}