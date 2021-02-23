var babel = require("babel-core");

babel.transformFile("example/demo.js", {}, function (err, result) {
  console.log(result);
});
