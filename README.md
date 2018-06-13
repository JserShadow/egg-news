# 校内资讯

> 校内资讯服务器

## 快速入门

<!-- 在此次添加使用文档 -->

### 目录结构

```bash
app
├── controller
|   ├── jwc.js  # 查询教务处资讯
│   ├── neau.js  # 查询东农官网资讯
│   ├── detail.js  # 查询资讯内容
│   └── search.js  # 关键词搜索
├── data-update  # 解析爬虫获取到的数据的方法
├── schedule  # 解析爬虫获取到的数据
│   └── refreshData.js  # 定时任务，控制每十分钟发出一次请求
└── service
    └── infoUpdate.js  # 爬虫方法
```

### Cheerio
- 数据解析使用`Cheerio`,可以使用Jquery的方式解析DOM结构

[Cheerio文档](https://cheerio.js.org/)

### HTTP请求
- 请求数据使用`axios`

[axios文档](https://www.npmjs.com/package/axios)

### 数据库
- 该项目使用`MongoDB`存放数据，配合`egg-mongoose`使用


如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
