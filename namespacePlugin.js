// 该插件的一个使用场景是根据文件路径动态生成reducer的名字

module.exports = function ({ types: t }) {
  return {
    visitor: {
      VariableDeclarator(path, state) {
        if (
          t.isIdentifier(path.node.init, {
            name: state.opts.name || "__filenamespace",
          })
        ) {
          const filename = state.file.opts.filename;

          let newNode = t.variableDeclarator(
            path.node.id,
            t.stringLiteral(filename.replace(/\.(js|ts|tsx|jsx)/, ""))
          );
          path.replaceWith(newNode);
        }
      },
    },
  };
};
