// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";
const isDevelopment = process.env.NODE_ENV == "development";

const config = {
   // entry: "./src/index.js",
   entry: {
      app: {
         import: "./src/assets/js/app.js",
         filename: 'assets/js/app.js'
      },
      styles: {
         import: "./src/assets/less/style.less",
         filename: 'assets/styles/test'
      },
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "assets/images/[hash][ext][query]",
      // clean: true,
      assetModuleFilename: "assets/images/[hash][ext][query]",
   },
   devServer: {
      // static: {
      //    directory: path.join(__dirname, './dist'),
      // },
      static: './dist',
      // compress: true,
      port: 9001,
      // open: true,
      // host: "localhost",
      hot: true,
      liveReload: true,
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "assets/styles/[name].css",
      }),
      new HtmlWebpackPlugin({
         template: "./src/index.html",
         filename: "index.html"
      }),
      new HtmlWebpackPlugin({
         template: "./src/about.html",
         filename: "about.html"
      }),

      // Add your plugins here
      // Learn more about plugins from https://webpack.js.org/configuration/plugins/
   ],
   module: {
      rules: [{
            test: /\.(js|jsx)$/i,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
               /**
                * From the docs: When set, the given directory will be used
                * to cache the results of the loader. Future webpack builds
                * will attempt to read from the cache to avoid needing to run
                * the potentially expensive Babel recompilation process on each run.
                */
               cacheDirectory: true,
             },
         },
         {
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
         },
         {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/i,
            type: "asset",
            // parser: {
            //   dataUrlCondition: {
            //     maxSize: 30 * 1024,
            //   },
            // },
         },

         // Add your rules for custom modules here
         // Learn more about loaders from https://webpack.js.org/loaders/
      ],
   },
   devtool: "source-map",
   resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src")],
      extensions: [".js", ".jsx", ".less"],
   },
};

module.exports = () => {
   if (isProduction) {
      config.mode = "production";

      // config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
   } else {
      config.mode = "development";
   }

   return config;
};