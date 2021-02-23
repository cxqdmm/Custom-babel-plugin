# Custom-babel-plugin
自定义babel插件

## 这里简单实现了两个自定义的babel插件

### namespacePlugin
```
.babelrc
{
  "plugins": [
    ["./namespacePlugin", { "name": "__cxqnamespace" }],
  ]
}

demo.js

const namespace = __cxqnamespace;
```
该插件会把__cxqnamespace 替换成 demo.js 的文件路径 

```
const namespace = "example/demo";
```

### ActionCreatorPlugin

```
.babelrc
{
  "plugins": [
    "./ActionCreatorPlugin"
  ]
}

demo.js
export const updateLoadingAction = ActionCreator();

```

转换的结果

```
export const updateLoadingAction = ActionCreator("example/demo/updateLoadingAction");
```
