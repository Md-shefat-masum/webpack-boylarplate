// Cannot load "react-refresh/babel" in production
const plugins = [];
const isDevelopment = process.env.NODE_ENV == "development";

module.exports = {
  presets: [
    "@babel/preset-env",
    // Runtime automatic with React 17+ allows not importing React
    // in files only using JSX (no state or React methods)
  ],
  plugins: plugins,
};
