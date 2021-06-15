<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-03 16:42:04
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-06-15 14:47:46
 * @Description: 
 * @Contact: jiangyanxi@live.com
 * @FilePath: /egg-mybatis/README.md
-->
# egg-mybatis
## 安装

```bash
$ npm i egg-mybatis --save
# or
$ yarn add egg-mybatis
```

## 依赖说明

### 依赖的 egg 版本

egg 2.x | egg 1.x
--- | ---
😁 | ❌

### 依赖的插件

[html-parse-stringify2](https://github.com/rayd/html-parse-stringify2)

[sqlstring](https://github.com/mysqljs/sqlstring)

## 开启插件

```js
// {app_root}/config/plugin.js
exports.mybatis = {
  enable: true,
  package: 'egg-mybatis',
};
```

## 配置

```js
// {app_root}/config/config.default.js
config.mybatis = {

};
```
## License

[MIT](LICENSE)