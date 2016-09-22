var path = require("path");
module.exports = {
  entry: {
    app: ["./dev/app/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};