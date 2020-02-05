const {
  override,
  fixBabelImports
} = require("customize-cra");

module.exports = override(
  // fixBabelImports("recharts", {
  //   libraryName: "recharts",
  //   libraryDirectory: 'recharts',
  //   camel2DashComponentName: false
  // })
);