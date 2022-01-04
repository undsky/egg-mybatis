/*
 * @Author: 姜彦汐
 * @Date: 2020-11-21 15:54:54
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-08-20 16:07:48
 * @Description: 映射器-开发环境
 * @Site: https://www.undsky.com
 */
const path = require('path')
const mybatisMapper = require('../../index')
const sqlstring = require('sqlstring')

module.exports = {
    get mapper() {
        return (namespace, sqlid, values, params) => {
            mybatisMapper.createMapper([path.join(this.baseDir, namespace)])
            return sqlstring.format(mybatisMapper.getStatement(namespace, sqlid, params), values)
        }
    }
}