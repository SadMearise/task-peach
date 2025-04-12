import path from "path";
import autoprefixer from "autoprefixer";
import HTMLWebpackPlugin from "html-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import CssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import RemoveEmptyScriptsPlugin from "webpack-remove-empty-scripts";
import CopyPlugin from "copy-webpack-plugin";

const srcFolder = "src";
const buildFolder = "dist";

const PATHS = {
  src: path.resolve(srcFolder),
  build: path.resolve(buildFolder),
};

const IS_PROD = process.env.NODE_ENV === "production";
const IS_DEV = !IS_PROD;

const optimization = IS_PROD ? {
  splitChunks: { chunks: "all" },
  minimizer: [
    new TerserWebpackPlugin({ extractComments: false }),
    new CssMinimizerWebpackPlugin(),
  ],
} : {};

const copyPluginPatterns = {
  patterns: [
    { from: `${srcFolder}/assets`, to: "assets", noErrorOnMissing: true, force: true },
    { from: `${PATHS.src}/favicon.ico`, to: "./", noErrorOnMissing: true },
  ],
};

export default {
  mode: IS_DEV ? "development" : "production",
  entry: `${PATHS.src}/js/index.js`,
  output: {
    path: PATHS.build,
    filename: "js/[name].min.js",
    clean: true,
    publicPath: "./",
  },
  optimization,
  devServer: {
    historyApiFallback: true,
    static: PATHS.build,
    open: { app: { name: "chrome" } },
    compress: true,
    port: "auto",
    hot: true,
    host: "local-ip",
    devMiddleware: { writeToDisk: true },
    watchFiles: `${PATHS.src}/**/*.html`,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: "index.html",
      inject: "body",
      hash: false,
      minify: { collapseWhitespace: IS_PROD },
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].min.css" }),
    new CopyPlugin(copyPluginPatterns),
    new RemoveEmptyScriptsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 0,
              sourceMap: false,
              modules: false,
              url: { filter: (url) => !url.includes("images") && !url.includes("fonts") },
            },
          },
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: [autoprefixer()], sourceMap: true } }
          },
          {
            loader: "sass-loader",
            options: { sassOptions: { outputStyle: "expanded" } },
          },
        ],
      },
    ],
  },
};
