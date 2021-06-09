// webpack harus dibungkus dengan expression `module.exports`
module.exports = {
  // ?? development mode membuat hasil bundle dari webpack berisi informasi - informasi lebih
  // ?? selain `development` mode, terdapat pula mode `production` yang akan membuat bundle lebih kecil
  mode: "development",
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