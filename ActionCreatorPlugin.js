// 该插件用来自动生成 redux action 的 type

module.exports = function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.callee.name !== "ActionCreator") return;
        if (!!path.node.arguments.length) return;

        const filename = state.file.opts.filename;

        let newNode = t.callExpression(t.identifier(path.node.callee.name), [
          t.stringLiteral(
            filename.replace(/\.(js|ts|tsx|jsx)/, "") +
              "/" +
              path.parent.id.name
          ),
        ]);
        path.replaceWith(newNode);
      },
    },
  };
};
