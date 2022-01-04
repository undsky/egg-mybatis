/*
 * @Author: 姜彦汐
 * @Date: 2020-11-21 15:17:35
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:07:54
 * @Description: 映射器-生产环境
 * @Site: https://www.undsky.com
 */
const mybatisMapper = require('../../index')
const fs = require('fs')
const path = require('path')
const sqlstring = require('sqlstring')

const MAPPER = Symbol('mybatis#mapper');

module.exports = {
    get mapper() {
        if (!this[MAPPER]) {
            let mappers = []
            _loadMappers(this.config.mybatis.mapperPath, mappers);
            mybatisMapper.createMapper(mappers)
            this[MAPPER] = (namespace, sqlid, values, params) => {
                return sqlstring.format(mybatisMapper.getStatement(namespace, sqlid, params), values)
            }
        }
        return this[MAPPER]
    }
}

function _loadMappers(dir, mappers) {
    if (fs.statSync(dir).isFile()) {
        if ('.xml' == path.extname(dir)) {
            mappers.push(dir)
        }
    } else {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            let filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                _loadMappers(filePath, mappers)
            } else if ('.xml' == path.extname(filePath)) {
                mappers.push(filePath)
            }
        }
    }
}