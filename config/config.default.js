/*
 * @Author: 姜彦汐
 * @Date: 2020-12-01 14:15:32
 * @LastEditors: 姜彦汐
 * @LastEditTime: 2021-11-30 10:34:27
 * @Description: 
 * @Site: https://www.undsky.com
 */
const path = require('path');

module.exports = appInfo => ({
    mybatis: {
        mapperPath: path.join(appInfo.baseDir, 'mapper'),
        defaultPageSize: 10, // 默认分页条数
        pageOffset: 1, // 分页偏移量
        currentPageName: 'currentPage',
        pageSizeName: 'pageSize'
    }
});