// docs/vite.config.ts

import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

// 分词器来源
// https://wenjiangs.com/article/segment.html
// https://github.com/leizongmin/node-segment
// 安装：
// yarn add segment -D
// 以下为样例

// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();
// 开始分词
// console.log(segment.doSegment('这是一个基于Node.js的中文分词模块。'));

var options = {
  // lang
  buttonLabel: "搜索",
  placeholder: "搜索文档",
  // 采用分词器优化，
  encode: function (str) {
    return segment.doSegment(str, {simple: true});
  },
  tokenize: "forward", // 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11

  // 以下代码返回完美的结果，但内存与空间消耗巨大，索引文件达到80M+
  // encode: false,
  // tokenize: "full",

};

export default defineConfig({
  plugins: [SearchPlugin(options)],
});