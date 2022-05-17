const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    historyApiFallback: {
      rewrites: [{ from: /\//, to: "/404.html" }],
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "Shou-Li Hsu",
      template: "src/assets/templates/home.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      title: "404",
      template: "src/assets/templates/404.html",
    }),
    new FaviconsWebpackPlugin("src/assets/images/favicon.png"),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
