// webpack harus dibungkus dengan expression `module.exports`
module.exports = {
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
  }

}