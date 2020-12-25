<!--
 * @Author: 姜彦汐
 * @Date: 2020-12-03 16:42:04
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2020-12-25 09:59:02
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

egg-mybatis 版本 | egg 2.x | egg 1.x
--- | ---
1.x | 😁 | ❌

### 依赖的插件

## 使用

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
exports.mybatis = {
  mapperPath: path.join(appInfo.baseDir, 'mapper') // 映射文件路径
};
```

## 示例

```js
 /**
 * @description: 
 * @param {String} namespace 命名空间
 * @param {String} id id 
 * @param {Object} values 占位参数
 * @param {Object} params 动态参数
 * @return {String} SQL 语句 
 */
this.app.mapper('namespace', 'id', values, params)
```

## License

[MIT](LICENSE)
