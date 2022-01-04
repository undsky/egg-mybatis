# egg-mybatis

> egg plugin for mybatis
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

[mybatis-mapper](https://github.com/OldBlackJoe/mybatis-mapper)

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
        mapperPath: path.join(appInfo.baseDir, 'mapper'),
        defaultPageSize: 10, // 默认分页条数
        pageOffset: 1, // 分页偏移量
        currentPageName: 'currentPage',
        pageSizeName: 'pageSize'
};
```

## 示例

## [点击查看更多开源项目 https://undsky.com/](https://undsky.com/)

## License

[MIT](LICENSE)