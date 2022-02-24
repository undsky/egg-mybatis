# egg-mybatis

> Egg plugin for mybatis


## 安装

```bash
$ npm i egg-mybatis --save
# or
$ yarn add egg-mybatis
```

+ 支持 MySQL 数据库，安装插件 [egg-database-mysql](https://github.com/undsky/egg-mysql2)
+ 支持 sqlite 数据库，安装插件 [egg-database-sqlite](https://github.com/undsky/egg-sqlite3)
+ 支持更多数据库可自行扩展

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

### 目录结构


> 支持多种类型数据库，多个数据库


+ 一种数据库，默认 MySQL

```bash
./mapper/数据库名/表名.xml
./mapper/数据库名/表名.xml
```

+ 多种数据库

```bash
./mapper/mysql/数据库名/表名.xml
./mapper/sqlite/数据库名/表名.xml
```

## 示例

### XML 映射文件

```xml
<!-- ./mapper/test/test.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="test">
    <select id="select">
    select column from table where id = ? 
    <if test="name">
     and name like '%${name}%'
    </if>
    limit 1
    </select>
</mapper>
```

### 使用

```js
// 动态生成 SQL
/**
 * @description: 
 * @param {*} namespace 命名空间
 * @param {*} sqlid sql id
 * @param {*} values ? 占位参数
 * @param {*} params 动态参数
 * @return {*}
 */
this.app.mapper(namespace, sqlid, values, params)

// 示例
const sql = this.app.mapper('test','select',[id],{
  name : 'name'
})
const result = await this.app.mysql.select(sql)
```

## [查看更多项目](https://www.undsky.com)

## License

[MIT](LICENSE)