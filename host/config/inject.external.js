const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = class InjectExternals {
  apply(compiler) {
    compiler.hooks.compilation.tap("InjectExternals", (compilation) => {
      console.log("The compiler is starting a new compilation...");

      // Static Plugin interface |compilation |HOOK NAME | register listener
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
        "InjectExternals",
        (data, cb) => {
          let externals = data.plugin.options.externals;
          if (!externals) cb(null, data);

          console.info("externalsexternals", externals);

          let tags = externals.map((url) => {
            return {
              tagName: "script",
              voidTag: false,
              attributes: {
                src: url,
              },
              innerHTML: "",
            };
          });
          data.headTags = [...tags, ...data.headTags];
          //update depenedentVersionNo in browser windows
          // Manipulate the content
          data.html += "The Magic Footer";
          // Tell webpack to move on
          cb(null, data);
        }
      );
    });
  }
};
