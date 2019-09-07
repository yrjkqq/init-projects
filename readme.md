# 前端代码规范初始化项目配置范例

1. 使用 vscode 等编辑器，安装 `eslint` `prettier` 插件
2. `package.json` 文件中添加 eslint 依赖

```json
"devDependencies": {
  "eslint": "^6.3.0",
  "eslint-config-airbnb": "^18.0.1",
  "eslint-plugin-import": "^2.18.2",
  "eslint-plugin-jsx-a11y": "^6.2.3",
  "eslint-plugin-react": "^7.14.3",
  "eslint-plugin-react-hooks": "^1.7.0",
},
```

3. 根目录下添加 `.eslintrc.json` `.prettierrc` 文件

```json
{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "linebreak-style": ["error", "windows"]
  }
}
```

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```
