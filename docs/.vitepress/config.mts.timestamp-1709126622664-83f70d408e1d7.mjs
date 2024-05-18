// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/vitepress-doc-main/vitepress-doc-main/node_modules/vitepress/dist/node/index.js";
import timeline from "file:///E:/vitepress-doc-main/vitepress-doc-main/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";
import { withMermaid } from "file:///E:/vitepress-doc-main/vitepress-doc-main/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";
var config = defineConfig({
  lang: "zh-CN",
  title: "\u4E2A\u4EBA\u77E5\u8BC6\u5206\u4EAB\u5E73\u53F0",
  description: "\u4E00\u4E2A\u654F\u6377\u7684\u5206\u4EAB\u5E73\u53F0",
  // #region fav
  head: [
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  // #endregion fav
  base: "/",
  //网站部署到github的vitepress这个仓库里
  //cleanUrls:true, //开启纯净链接无html
  mermaid: {
    // ...
  },
  //启用深色模式
  appearance: "dark",
  //多语言
  locales: {
    root: {
      label: "\u7B80\u4F53\u4E2D\u6587",
      lang: "Zh_CN"
    }
  },
  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,
    //时间线 
    config: (md) => {
      md.use(timeline);
    },
    // 开启图片懒加载
    image: {
      lazyLoading: true
    }
  },
  //主题配置
  themeConfig: {
    //左上角logo
    //logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏
    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',
    //导航栏
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u{1F349}\u6307\u5357",
        items: [
          {
            // 分组标题1
            text: "\u4ECB\u7ECD",
            items: [
              { text: "\u524D\u8A00", link: "/preface" }
            ]
          },
          {
            // 分组标题2
            text: "\u57FA\u7840\u8BBE\u7F6E",
            items: [
              { text: "\u5FEB\u901F\u4E0A\u624B", link: "/getting-started" },
              { text: "\u914D\u7F6E", link: "/configuration" },
              { text: "\u9875\u9762", link: "/page" },
              { text: "Frontmatter", link: "/frontmatter" }
            ]
          },
          {
            // 分组标题3
            text: "\u8FDB\u9636\u73A9\u6CD5",
            items: [
              { text: "Markdown", link: "/markdown" },
              { text: "\u9759\u6001\u90E8\u7F72", link: "/assets" },
              { text: "\u6837\u5F0F\u7F8E\u5316", link: "/style" },
              { text: "\u7EC4\u4EF6", link: "/components" },
              { text: "\u5E03\u5C40\u63D2\u69FD", link: "/layout" },
              { text: "\u63D2\u4EF6", link: "/plugin" },
              { text: "\u66F4\u65B0\u53CA\u5378\u8F7D", link: "/update" },
              { text: "\u642D\u5EFA\u5BFC\u822A", link: "/nav/" }
            ]
          }
        ]
      }
    ],
    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: "vitepress\u53C2\u8003\u6559\u7A0B",
        collapsed: false,
        items: [
          { text: "\u524D\u8A00", link: "/preface" },
          { text: "\u5FEB\u901F\u4E0A\u624B", link: "/getting-started" },
          { text: "\u914D\u7F6E", link: "/configuration" },
          { text: "\u9875\u9762", link: "/page" },
          { text: "Frontmatter", link: "/frontmatter" },
          { text: "Markdown", link: "/markdown" },
          { text: "\u9759\u6001\u90E8\u7F72", link: "/assets" },
          { text: "\u6837\u5F0F\u7F8E\u5316", link: "/style" },
          { text: "\u7EC4\u4EF6", link: "/components" },
          { text: "\u5E03\u5C40\u63D2\u69FD", link: "/layout" },
          { text: "\u63D2\u4EF6", link: "/plugin" },
          { text: "\u66F4\u65B0\u53CA\u5378\u8F7D", link: "/update" },
          { text: "\u642D\u5EFA\u5BFC\u822A", link: "/nav/" }
        ]
      },
      {
        text: "\u529F\u80FD\u6D4B\u8BD5",
        collapsed: false,
        items: [
          { text: "\u6D4B\u8BD5", link: "/Text" }
        ]
      },
      {
        text: "\u6570\u636E\u7ED3\u6784",
        collapsed: false,
        items: [
          { text: "\u7B2C\u4E00\u7AE0\uFF1A\u53D1\u5C55", link: "/program" },
          { text: "\u601D\u7EF4\u5BFC\u56FE", link: "/mind.mm.md" }
        ]
      }
      /*{
        //分组标题3
      text: '其他站点',
      collapsed: false,
        items: [
        { text: 'VuePress', link: 'https://vuepress.yiov.top/' },
        { text: '劝学录教程', link: 'https://yiov.top/' },
        { text: '个人主页', link: 'https://yingyayi.com/' },
        ],
      },*/
    ],
    //本地搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "\u641C\u7D22\u6587\u6863",
                buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
              },
              modal: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
                footer: {
                  selectText: "\u9009\u62E9",
                  navigateText: "\u5207\u6362"
                }
              }
            }
          }
        }
      }
    },
    website: {
      copyadd: true,
      //用户复制页面内容时尾巴自动添加版权声明
      perpage: 12,
      //列表页每页显示数量
      homeBanner: false,
      //显示首页 banner,banner列表在上面 banner中配置
      bannerHeight: 200,
      //banner高度
      showWelcome: false,
      //是否显示首页底部右下角弹框，（调试时弹框不显示的话先关闭浏览器再运行，因为有可能开启了缓存）内容请在组件.vitepress/theme/components/Welcome.vue编写
      welcomeusestate: false,
      //底部弹框是否使用sessionStorage缓存(即不关闭页面仅显示一次)
      welcome: {
        autoClose: 6e3
        //多长时间自动关闭，false为不关闭
      },
      showSnow: true,
      //是否开启雪花。开启后仅在暗黑模式下显示
      showUserCard: false,
      //是否显示列表中的博主名片
      cardPosition: 3,
      //显示在第几个位置
      cardMusic: true,
      //是否显示播放音乐，音乐列表在上面 music中配置
      cardCoffee: true,
      //是否显示打赏咖啡，
      coffeeQrcode: "https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0f859sm6j208c08cabm.jpg",
      //打赏咖啡二维码图片地址。如果是跳转网页地址需自行修改代码
      showLantern: false,
      //是否显示灯笼挂件
      lanternText: ["\u65B0", "\u5E74"],
      //灯笼上的字,数组形式
      showFirework: false,
      //是否显示侧栏烟花特效
      fireworkTitle: "\u{1F9E8}\u70DF\u82B1\u8BB8\u613F\u{1F9E8}\uFF5C\u2461\u24EA\u2461\u2463\u65B0\u5E74",
      //烟花许愿标题
      fireworkWords: ["\u606D\u8D3A\u65B0\u79A7", "\u4E07\u4E8B\u5982\u610F", "\u65B0\u5E74\u5FEB\u4E50", "\u606D\u559C\u53D1\u8D22", "\u5C81\u5C81\u5E73\u5B89", "\u5409\u7965\u5982\u610F", "\u5FC3\u60F3\u4E8B\u6210", "\u4E07\u4E8B\u987A\u9042", "\u4E00\u5E06\u98CE\u987A", "\u4E8C\u9F99\u817E\u98DE", "\u4E09\u7F8A\u5F00\u6CF0", "\u56DB\u5B63\u5E73\u5B89", "\u4E94\u798F\u4E34\u95E8", "\u516D\u516D\u5927\u987A", "\u4E03\u661F\u9AD8\u7167", "\u516B\u65B9\u6765\u8D22", "\u4E5D\u4E5D\u540C\u5FC3", "\u5341\u5168\u5341\u7F8E", "\u8363\u534E\u5BCC\u8D35", "\u91D1\u7389\u6EE1\u5802", "\u9F99\u51E4\u5448\u7965", "\u559C\u6C14\u6D0B\u6D0B", "\u9E3F\u8FD0\u5F53\u5934", "\u8D22\u6E90\u5E7F\u8FDB", "\u7B11\u53E3\u5E38\u5F00", "\u5E78\u798F\u5B89\u5EB7", "\u65E5\u8FDB\u6597\u91D1", "\u751F\u610F\u5174\u9686", "\u6B65\u6B65\u9AD8\u5347", "\u5E74\u5E74\u6709\u4F59", "\u8FCE\u6625\u63A5\u798F", "\u559C\u6C14\u76C8\u95E8", "\u82B1\u56E2\u9526\u7C07", "\u524D\u7A0B\u4F3C\u9526", "\u798F\u6EE1\u4EBA\u95F4", "\u6625\u56DE\u5927\u5730", "\u8F9E\u65E7\u8FCE\u65B0", "\u4E07\u8C61\u66F4\u65B0", "\u5409\u7965\u5982\u610F", "\u4E07\u4E8B\u5927\u5409", "\u9A6C\u5230\u6210\u529F", "\u529F\u6210\u540D\u5C31", "\u9C7C\u8DC3\u9F99\u95E8", "\u4E00\u98DE\u51B2\u5929", "\u745E\u6C14\u76C8\u95E8", "\u798F\u5BFF\u5EB7\u5B81", "\u65F6\u6765\u8FD0\u8F6C", "\u9E3F\u8FD0\u9AD8\u7167", "\u4E09\u9633\u5F00\u6CF0", "\u5426\u6781\u6CF0\u6765", "\u9E3F\u8FD0\u4EA8\u901A", "\u4E00\u5E06\u98CE\u987A", "\u51FA\u5165\u5E73\u5B89", "\u987A\u98CE\u987A\u6C34", "\u9F99\u51E4\u5448\u7965", "\u82B1\u597D\u6708\u5706", "\u5F20\u706F\u7ED3\u5F69", "\u6B22\u5929\u559C\u5730", "\u5408\u5BB6\u6B22\u4E50", "\u5E78\u798F\u7F8E\u6EE1", "\u548C\u6C14\u81F4\u7965", "\u62DB\u8D22\u8FDB\u5B9D", "\u5F00\u95E8\u5927\u5409", "\u8FCE\u6625\u63A5\u798F", "\u798F\u6CFD\u6EE1\u95E8", "\u82B1\u5F00\u5BCC\u8D35", "\u7AF9\u62A5\u5E73\u5B89", "\u5927\u5409\u5927\u5229", "\u606D\u559C\u53D1\u8D22"],
      //烟花许愿关键词
      link: "https://appbeebee.com/"
    },
    //社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/zhangJack1" },
      {
        //微信图标
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: "https://weixin.qq.com/",
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: "wechat"
      }
    ],
    //手机端深浅模式文字修改
    darkModeSwitchLabel: "\u6DF1\u6D45\u6A21\u5F0F",
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: "\u76EE\u5F55",
    //返回顶部文字修改(移动端)
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    //大纲显示2-3级标题
    outline: {
      level: [2, 3],
      label: "\u5F53\u524D\u9875\u5927\u7EB2"
    },
    //编辑本页
    editLink: {
      pattern: "https://github.com/zhangjack1/vitepress/edit/main/docs/:path",
      text: "\u5728GitHub\u7F16\u8F91\u672C\u9875"
    },
    //自定义上下页名
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    }
  }
});
var config_default = withMermaid(config);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2aXRlcHJlc3MtZG9jLW1haW5cXFxcdml0ZXByZXNzLWRvYy1tYWluXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdml0ZXByZXNzLWRvYy1tYWluXFxcXHZpdGVwcmVzcy1kb2MtbWFpblxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovdml0ZXByZXNzLWRvYy1tYWluL3ZpdGVwcmVzcy1kb2MtbWFpbi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy9cdTU0N0RcdTRFRTRcdTk2QzZcdUZGMUFwbnBtIGFkZCAtRCB2aXRlcHJlc3MgdnVlIGxlc3Mgc2FzcyBAbWRpdC12dWUvc2hhcmVkIHZpdGVwcmVzcy1tYXJrZG93bi10aW1lbGluZSBtZWRpdW0tem9vbSB2aXRlcHJlc3MtcGx1Z2luLWNvbW1lbnQtd2l0aC1naXNjdXNcblxuaW1wb3J0IHRpbWVsaW5lIGZyb20gXCJ2aXRlcHJlc3MtbWFya2Rvd24tdGltZWxpbmVcIjsgXG5cbmltcG9ydCB7IHdpdGhNZXJtYWlkIH0gZnJvbSBcInZpdGVwcmVzcy1wbHVnaW4tbWVybWFpZFwiO1xuY29uc3QgY29uZmlnID0gZGVmaW5lQ29uZmlnKHtcblxuICAgIGxhbmc6ICd6aC1DTicsXG4gICAgdGl0bGU6IFwiXHU0RTJBXHU0RUJBXHU3N0U1XHU4QkM2XHU1MjA2XHU0RUFCXHU1RTczXHU1M0YwXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU2NTRGXHU2Mzc3XHU3Njg0XHU1MjA2XHU0RUFCXHU1RTczXHU1M0YwXCIsXG5cblxuICAvLyAjcmVnaW9uIGZhdlxuICBoZWFkOiBbXG4gICAgWydsaW5rJyx7IHJlbDogJ2ljb24nLCBocmVmOiAnL2xvZ28ucG5nJ31dLFxuICBdLFxuICAvLyAjZW5kcmVnaW9uIGZhdlxuXG4gIGJhc2U6ICcvJywgLy9cdTdGNTFcdTdBRDlcdTkwRThcdTdGNzJcdTUyMzBnaXRodWJcdTc2ODR2aXRlcHJlc3NcdThGRDlcdTRFMkFcdTRFRDNcdTVFOTNcdTkxQ0NcblxuICAvL2NsZWFuVXJsczp0cnVlLCAvL1x1NUYwMFx1NTQyRlx1N0VBRlx1NTFDMFx1OTRGRVx1NjNBNVx1NjVFMGh0bWxcbiAgbWVybWFpZDoge1xuICAgIC8vIC4uLlxuICB9LFxuXG5cbiAgLy9cdTU0MkZcdTc1MjhcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEZcbiAgYXBwZWFyYW5jZTonZGFyaycsXG5cbiAgLy9cdTU5MUFcdThCRURcdThBMDBcbiAgbG9jYWxlczoge1xuICAgIHJvb3Q6IHtcbiAgICAgIGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JyxcbiAgICAgIGxhbmc6ICdaaF9DTicsXG4gICAgfSxcbiAgfSxcblxuICAvL21hcmtkb3duXHU5MTREXHU3RjZFXG4gIG1hcmtkb3duOiB7XG4gICAgLy9cdTg4NENcdTUzRjdcdTY2M0VcdTc5M0FcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSwgXG5cbiAgICAvL1x1NjVGNlx1OTVGNFx1N0VCRiBcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQudXNlKHRpbWVsaW5lKTtcbiAgICB9LFxuXG5cbiAgICAvLyBcdTVGMDBcdTU0MkZcdTU2RkVcdTcyNDdcdTYxRDJcdTUyQTBcdThGN0RcbiAgICBpbWFnZToge1xuICAgICAgbGF6eUxvYWRpbmc6IHRydWVcbiAgICB9LFxuXG4gIH0sXG5cbiAgXG5cbiAgLy9cdTRFM0JcdTk4OThcdTkxNERcdTdGNkVcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvL1x1NURFNlx1NEUwQVx1ODlEMmxvZ29cbiAgICAvL2xvZ286ICcvbG9nby5wbmcnLFxuICAgIC8vbG9nbzogJ2h0dHBzOi8vdml0ZWpzLmNuL3ZpdGUzLWNuL2xvZ28td2l0aC1zaGFkb3cucG5nJywgLy9cdThGRENcdTdBMEJcdTVGMTVcdTc1MjhcbiAgICAvL3NpdGVUaXRsZTogZmFsc2UsIC8vXHU2ODA3XHU5ODk4XHU5NjkwXHU4NUNGXG5cbiAgICAvL1x1OEJCRVx1N0Y2RVx1N0FEOVx1NzBCOVx1NjgwN1x1OTg5OCBcdTRGMUFcdTg5ODZcdTc2RDZ0aXRsZVxuICAgIC8vc2l0ZVRpdGxlOiAnSGVsbG8gV29ybGQnLFxuXG4gICAgLy9cdTVCRkNcdTgyMkFcdTY4MEZcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHVEODNDXHVERjQ5XHU2MzA3XHU1MzU3JyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBcdTUyMDZcdTdFQzRcdTY4MDdcdTk4OTgxXG4gICAgICAgICAgICB0ZXh0OiAnXHU0RUNCXHU3RUNEJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1OEEwMCcsIGxpbms6ICcvcHJlZmFjZScgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBcdTUyMDZcdTdFQzRcdTY4MDdcdTk4OTgyXG4gICAgICAgICAgICB0ZXh0OiAnXHU1N0ZBXHU3ODQwXHU4QkJFXHU3RjZFJyxcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NEUwQVx1NjI0QicsIGxpbms6ICcvZ2V0dGluZy1zdGFydGVkJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTkxNERcdTdGNkUnLCBsaW5rOiAnL2NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1OTg3NVx1OTc2MicsIGxpbms6ICcvcGFnZScgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnRnJvbnRtYXR0ZXInLCBsaW5rOiAnL2Zyb250bWF0dGVyJyB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFx1NTIwNlx1N0VDNFx1NjgwN1x1OTg5ODNcbiAgICAgICAgICAgIHRleHQ6ICdcdThGREJcdTk2MzZcdTczQTlcdTZDRDUnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnTWFya2Rvd24nLCBsaW5rOiAnL21hcmtkb3duJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTk3NTlcdTYwMDFcdTkwRThcdTdGNzInLCBsaW5rOiAnL2Fzc2V0cycgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2ODM3XHU1RjBGXHU3RjhFXHU1MzE2JywgbGluazogJy9zdHlsZScgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU3RUM0XHU0RUY2JywgbGluazogJy9jb21wb25lbnRzJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTVFMDNcdTVDNDBcdTYzRDJcdTY5RkQnLCBsaW5rOiAnL2xheW91dCcgfSxcbiAgICAgICAgICAgICAgeyB0ZXh0OiAnXHU2M0QyXHU0RUY2JywgbGluazogJy9wbHVnaW4nIH0sXG4gICAgICAgICAgICAgIHsgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NTNDQVx1NTM3OFx1OEY3RCcsIGxpbms6ICcvdXBkYXRlJyB9LFxuICAgICAgICAgICAgICB7IHRleHQ6ICdcdTY0MkRcdTVFRkFcdTVCRkNcdTgyMkEnLCBsaW5rOiAnL25hdi8nIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuXG5cbiAgICBdLFxuXG5cbiAgICAvL1x1NEZBN1x1OEZCOVx1NjgwRlxuICAgIHNpZGViYXI6IFtcbiAgICAgIHtcbiAgICAgICAgLy9cdTUyMDZcdTdFQzRcdTY4MDdcdTk4OTgxXG4gICAgICAgIHRleHQ6ICd2aXRlcHJlc3NcdTUzQzJcdTgwMDNcdTY1NTlcdTdBMEInLFxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1OEEwMCcsIGxpbms6ICcvcHJlZmFjZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGRUJcdTkwMUZcdTRFMEFcdTYyNEInLCBsaW5rOiAnL2dldHRpbmctc3RhcnRlZCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTkxNERcdTdGNkUnLCBsaW5rOiAnL2NvbmZpZ3VyYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU5ODc1XHU5NzYyJywgbGluazogJy9wYWdlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0Zyb250bWF0dGVyJywgbGluazogJy9mcm9udG1hdHRlcicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdNYXJrZG93bicsIGxpbms6ICcvbWFya2Rvd24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU5NzU5XHU2MDAxXHU5MEU4XHU3RjcyJywgbGluazogJy9hc3NldHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2ODM3XHU1RjBGXHU3RjhFXHU1MzE2JywgbGluazogJy9zdHlsZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdcdTdFQzRcdTRFRjYnLCBsaW5rOiAnL2NvbXBvbmVudHMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RTAzXHU1QzQwXHU2M0QyXHU2OUZEJywgbGluazogJy9sYXlvdXQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2M0QyXHU0RUY2JywgbGluazogJy9wbHVnaW4nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU1M0NBXHU1Mzc4XHU4RjdEJywgbGluazogJy91cGRhdGUnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2NDJEXHU1RUZBXHU1QkZDXHU4MjJBJywgbGluazogJy9uYXYvJyB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBcblxuICAgIHsgdGV4dDogJ1x1NTI5Rlx1ODBGRFx1NkQ0Qlx1OEJENScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFsgXG4gICAgICAgIHsgdGV4dDogJ1x1NkQ0Qlx1OEJENScsIGxpbms6ICcvVGV4dCcgfSxcbiAgICAgIF0sXG4gICAgICB9LFxuXG4gICAgICB7IHRleHQ6ICdcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODQnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbIFxuICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTRFMDBcdTdBRTBcdUZGMUFcdTUzRDFcdTVDNTUnLCBsaW5rOiAnL3Byb2dyYW0nIH0sXG4gICAgICAgIHt0ZXh0OiAnXHU2MDFEXHU3RUY0XHU1QkZDXHU1NkZFJyxsaW5rOicvbWluZC5tbS5tZCd9XG4gICAgICBdLFxuICAgICAgfSxcblxuICAgICAgLyp7XG4gICAgICAgIC8vXHU1MjA2XHU3RUM0XHU2ODA3XHU5ODk4M1xuICAgICAgdGV4dDogJ1x1NTE3Nlx1NEVENlx1N0FEOVx1NzBCOScsXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdWdWVQcmVzcycsIGxpbms6ICdodHRwczovL3Z1ZXByZXNzLnlpb3YudG9wLycgfSxcbiAgICAgICAgeyB0ZXh0OiAnXHU1MjlEXHU1QjY2XHU1RjU1XHU2NTU5XHU3QTBCJywgbGluazogJ2h0dHBzOi8veWlvdi50b3AvJyB9LFxuICAgICAgICB7IHRleHQ6ICdcdTRFMkFcdTRFQkFcdTRFM0JcdTk4NzUnLCBsaW5rOiAnaHR0cHM6Ly95aW5neWF5aS5jb20vJyB9LFxuICAgICAgICBdLFxuICAgICAgfSwqL1xuICAgIF0sXG5cblxuXG4gICAgLy9cdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjJcbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgemg6IHtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgICAgICAgICBidXR0b25BcmlhTGFiZWw6ICdcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjMnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGFsOiB7XG4gICAgICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXG4gICAgICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcbiAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogJ1x1NTIwN1x1NjM2MidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG5cbiAgICB3ZWJzaXRlOiB7XG4gICAgICBjb3B5YWRkOiB0cnVlLCAvL1x1NzUyOFx1NjIzN1x1NTkwRFx1NTIzNlx1OTg3NVx1OTc2Mlx1NTE4NVx1NUJCOVx1NjVGNlx1NUMzRVx1NURGNFx1ODFFQVx1NTJBOFx1NkRGQlx1NTJBMFx1NzI0OFx1Njc0M1x1NThGMFx1NjYwRVxuICAgICAgcGVycGFnZTogMTIsIC8vXHU1MjE3XHU4ODY4XHU5ODc1XHU2QkNGXHU5ODc1XHU2NjNFXHU3OTNBXHU2NTcwXHU5MUNGXG4gICAgICBob21lQmFubmVyOiBmYWxzZSwgLy9cdTY2M0VcdTc5M0FcdTk5OTZcdTk4NzUgYmFubmVyLGJhbm5lclx1NTIxN1x1ODg2OFx1NTcyOFx1NEUwQVx1OTc2MiBiYW5uZXJcdTRFMkRcdTkxNERcdTdGNkVcbiAgICAgIGJhbm5lckhlaWdodDogMjAwLCAvL2Jhbm5lclx1OUFEOFx1NUVBNlxuICAgICAgc2hvd1dlbGNvbWU6IGZhbHNlLCAvL1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1OTk5Nlx1OTg3NVx1NUU5NVx1OTBFOFx1NTNGM1x1NEUwQlx1ODlEMlx1NUYzOVx1Njg0Nlx1RkYwQ1x1RkYwOFx1OEMwM1x1OEJENVx1NjVGNlx1NUYzOVx1Njg0Nlx1NEUwRFx1NjYzRVx1NzkzQVx1NzY4NFx1OEJERFx1NTE0OFx1NTE3M1x1OTVFRFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NTE4RFx1OEZEMFx1ODg0Q1x1RkYwQ1x1NTZFMFx1NEUzQVx1NjcwOVx1NTNFRlx1ODBGRFx1NUYwMFx1NTQyRlx1NEU4Nlx1N0YxM1x1NUI1OFx1RkYwOVx1NTE4NVx1NUJCOVx1OEJGN1x1NTcyOFx1N0VDNFx1NEVGNi52aXRlcHJlc3MvdGhlbWUvY29tcG9uZW50cy9XZWxjb21lLnZ1ZVx1N0YxNlx1NTE5OVxuICAgICAgd2VsY29tZXVzZXN0YXRlOiBmYWxzZSwgLy9cdTVFOTVcdTkwRThcdTVGMzlcdTY4NDZcdTY2MkZcdTU0MjZcdTRGN0ZcdTc1MjhzZXNzaW9uU3RvcmFnZVx1N0YxM1x1NUI1OChcdTUzNzNcdTRFMERcdTUxNzNcdTk1RURcdTk4NzVcdTk3NjJcdTRFQzVcdTY2M0VcdTc5M0FcdTRFMDBcdTZCMjEpXG4gICAgICB3ZWxjb21lOiB7XG4gICAgICAgICAgYXV0b0Nsb3NlOiA2MDAwLCAvL1x1NTkxQVx1OTU3Rlx1NjVGNlx1OTVGNFx1ODFFQVx1NTJBOFx1NTE3M1x1OTVFRFx1RkYwQ2ZhbHNlXHU0RTNBXHU0RTBEXHU1MTczXHU5NUVEXG4gICAgICB9LFxuICAgICAgc2hvd1Nub3c6IHRydWUsIC8vXHU2NjJGXHU1NDI2XHU1RjAwXHU1NDJGXHU5NkVBXHU4MkIxXHUzMDAyXHU1RjAwXHU1NDJGXHU1NDBFXHU0RUM1XHU1NzI4XHU2Njk3XHU5RUQxXHU2QTIxXHU1RjBGXHU0RTBCXHU2NjNFXHU3OTNBXG4gICAgICBzaG93VXNlckNhcmQ6IGZhbHNlLCAvL1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NTIxN1x1ODg2OFx1NEUyRFx1NzY4NFx1NTM1QVx1NEUzQlx1NTQwRFx1NzI0N1xuICAgICAgY2FyZFBvc2l0aW9uOiAzLCAvL1x1NjYzRVx1NzkzQVx1NTcyOFx1N0IyQ1x1NTFFMFx1NEUyQVx1NEY0RFx1N0Y2RVxuICAgICAgY2FyZE11c2ljOiB0cnVlLCAvL1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NjRBRFx1NjUzRVx1OTdGM1x1NEU1MFx1RkYwQ1x1OTdGM1x1NEU1MFx1NTIxN1x1ODg2OFx1NTcyOFx1NEUwQVx1OTc2MiBtdXNpY1x1NEUyRFx1OTE0RFx1N0Y2RVxuICAgICAgY2FyZENvZmZlZTogdHJ1ZSwgLy9cdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTYyNTNcdThENEZcdTU0OTZcdTU1NjFcdUZGMENcbiAgICAgIGNvZmZlZVFyY29kZTogJ2h0dHBzOi8vaW1hZ2UuYmFpZHUuY29tL3NlYXJjaC9kb3duP3VybD1odHRwczovL2ZjLnNpbmFpbWcuY24vbGFyZ2UvNjM2NGFhNDNneTFobTBmODU5c202ajIwOGMwOGNhYm0uanBnJywgLy9cdTYyNTNcdThENEZcdTU0OTZcdTU1NjFcdTRFOENcdTdFRjRcdTc4MDFcdTU2RkVcdTcyNDdcdTU3MzBcdTU3NDBcdTMwMDJcdTU5ODJcdTY3OUNcdTY2MkZcdThERjNcdThGNkNcdTdGNTFcdTk4NzVcdTU3MzBcdTU3NDBcdTk3MDBcdTgxRUFcdTg4NENcdTRGRUVcdTY1MzlcdTRFRTNcdTc4MDFcbiAgICAgIHNob3dMYW50ZXJuOiBmYWxzZSwgLy9cdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcdTcwNkZcdTdCM0NcdTYzMDJcdTRFRjZcbiAgICAgIGxhbnRlcm5UZXh0OiBbJ1x1NjVCMCcsICdcdTVFNzQnXSwgLy9cdTcwNkZcdTdCM0NcdTRFMEFcdTc2ODRcdTVCNTcsXHU2NTcwXHU3RUM0XHU1RjYyXHU1RjBGXG4gICAgICBzaG93RmlyZXdvcms6IGZhbHNlLCAvL1x1NjYyRlx1NTQyNlx1NjYzRVx1NzkzQVx1NEZBN1x1NjgwRlx1NzBERlx1ODJCMVx1NzI3OVx1NjU0OFxuICAgICAgZmlyZXdvcmtUaXRsZTogJ1x1RDgzRVx1RERFOFx1NzBERlx1ODJCMVx1OEJCOFx1NjEzRlx1RDgzRVx1RERFOFx1RkY1Q1x1MjQ2MVx1MjRFQVx1MjQ2MVx1MjQ2M1x1NjVCMFx1NUU3NCcsIC8vXHU3MERGXHU4MkIxXHU4QkI4XHU2MTNGXHU2ODA3XHU5ODk4XG4gICAgICBmaXJld29ya1dvcmRzOiBbJ1x1NjA2RFx1OEQzQVx1NjVCMFx1NzlBNycsICdcdTRFMDdcdTRFOEJcdTU5ODJcdTYxMEYnLCAnXHU2NUIwXHU1RTc0XHU1RkVCXHU0RTUwJywgJ1x1NjA2RFx1NTU5Q1x1NTNEMVx1OEQyMicsICdcdTVDODFcdTVDODFcdTVFNzNcdTVCODknLCAnXHU1NDA5XHU3OTY1XHU1OTgyXHU2MTBGJywgJ1x1NUZDM1x1NjBGM1x1NEU4Qlx1NjIxMCcsICdcdTRFMDdcdTRFOEJcdTk4N0FcdTkwNDInLCAnXHU0RTAwXHU1RTA2XHU5OENFXHU5ODdBJywgJ1x1NEU4Q1x1OUY5OVx1ODE3RVx1OThERScsICdcdTRFMDlcdTdGOEFcdTVGMDBcdTZDRjAnLCAnXHU1NkRCXHU1QjYzXHU1RTczXHU1Qjg5JywgJ1x1NEU5NFx1Nzk4Rlx1NEUzNFx1OTVFOCcsICdcdTUxNkRcdTUxNkRcdTU5MjdcdTk4N0EnLCAnXHU0RTAzXHU2NjFGXHU5QUQ4XHU3MTY3JywgJ1x1NTE2Qlx1NjVCOVx1Njc2NVx1OEQyMicsICdcdTRFNURcdTRFNURcdTU0MENcdTVGQzMnLCAnXHU1MzQxXHU1MTY4XHU1MzQxXHU3RjhFJywgJ1x1ODM2M1x1NTM0RVx1NUJDQ1x1OEQzNScsICdcdTkxRDFcdTczODlcdTZFRTFcdTU4MDInLCAnXHU5Rjk5XHU1MUU0XHU1NDQ4XHU3OTY1JywgJ1x1NTU5Q1x1NkMxNFx1NkQwQlx1NkQwQicsICdcdTlFM0ZcdThGRDBcdTVGNTNcdTU5MzQnLCAnXHU4RDIyXHU2RTkwXHU1RTdGXHU4RkRCJywgJ1x1N0IxMVx1NTNFM1x1NUUzOFx1NUYwMCcsICdcdTVFNzhcdTc5OEZcdTVCODlcdTVFQjcnLCAnXHU2NUU1XHU4RkRCXHU2NTk3XHU5MUQxJywgJ1x1NzUxRlx1NjEwRlx1NTE3NFx1OTY4NicsICdcdTZCNjVcdTZCNjVcdTlBRDhcdTUzNDcnLCAnXHU1RTc0XHU1RTc0XHU2NzA5XHU0RjU5JywgJ1x1OEZDRVx1NjYyNVx1NjNBNVx1Nzk4RicsICdcdTU1OUNcdTZDMTRcdTc2QzhcdTk1RTgnLCAnXHU4MkIxXHU1NkUyXHU5NTI2XHU3QzA3JywgJ1x1NTI0RFx1N0EwQlx1NEYzQ1x1OTUyNicsICdcdTc5OEZcdTZFRTFcdTRFQkFcdTk1RjQnLCAnXHU2NjI1XHU1NkRFXHU1OTI3XHU1NzMwJywgJ1x1OEY5RVx1NjVFN1x1OEZDRVx1NjVCMCcsICdcdTRFMDdcdThDNjFcdTY2RjRcdTY1QjAnLCAnXHU1NDA5XHU3OTY1XHU1OTgyXHU2MTBGJywgJ1x1NEUwN1x1NEU4Qlx1NTkyN1x1NTQwOScsICdcdTlBNkNcdTUyMzBcdTYyMTBcdTUyOUYnLCAnXHU1MjlGXHU2MjEwXHU1NDBEXHU1QzMxJywgJ1x1OUM3Q1x1OERDM1x1OUY5OVx1OTVFOCcsICdcdTRFMDBcdTk4REVcdTUxQjJcdTU5MjknLCAnXHU3NDVFXHU2QzE0XHU3NkM4XHU5NUU4JywgJ1x1Nzk4Rlx1NUJGRlx1NUVCN1x1NUI4MScsICdcdTY1RjZcdTY3NjVcdThGRDBcdThGNkMnLCAnXHU5RTNGXHU4RkQwXHU5QUQ4XHU3MTY3JywgJ1x1NEUwOVx1OTYzM1x1NUYwMFx1NkNGMCcsICdcdTU0MjZcdTY3ODFcdTZDRjBcdTY3NjUnLCAnXHU5RTNGXHU4RkQwXHU0RUE4XHU5MDFBJywgJ1x1NEUwMFx1NUUwNlx1OThDRVx1OTg3QScsICdcdTUxRkFcdTUxNjVcdTVFNzNcdTVCODknLCAnXHU5ODdBXHU5OENFXHU5ODdBXHU2QzM0JywgJ1x1OUY5OVx1NTFFNFx1NTQ0OFx1Nzk2NScsICdcdTgyQjFcdTU5N0RcdTY3MDhcdTU3MDYnLCAnXHU1RjIwXHU3MDZGXHU3RUQzXHU1RjY5JywgJ1x1NkIyMlx1NTkyOVx1NTU5Q1x1NTczMCcsICdcdTU0MDhcdTVCQjZcdTZCMjJcdTRFNTAnLCAnXHU1RTc4XHU3OThGXHU3RjhFXHU2RUUxJywgJ1x1NTQ4Q1x1NkMxNFx1ODFGNFx1Nzk2NScsICdcdTYyREJcdThEMjJcdThGREJcdTVCOUQnLCAnXHU1RjAwXHU5NUU4XHU1OTI3XHU1NDA5JywgJ1x1OEZDRVx1NjYyNVx1NjNBNVx1Nzk4RicsICdcdTc5OEZcdTZDRkRcdTZFRTFcdTk1RTgnLCAnXHU4MkIxXHU1RjAwXHU1QkNDXHU4RDM1JywgJ1x1N0FGOVx1NjJBNVx1NUU3M1x1NUI4OScsICdcdTU5MjdcdTU0MDlcdTU5MjdcdTUyMjknLCAnXHU2MDZEXHU1NTlDXHU1M0QxXHU4RDIyJ10sIC8vXHU3MERGXHU4MkIxXHU4QkI4XHU2MTNGXHU1MTczXHU5NTJFXHU4QkNEXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9hcHBiZWViZWUuY29tLydcbiAgfSxcblxuXG4gICAgLy9cdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS96aGFuZ0phY2sxJyB9LFxuICAgICAgey8vXHU1RkFFXHU0RkUxXHU1NkZFXHU2ODA3XG4gICAgICAgIGljb246IHtcbiAgICAgICAgICBzdmc6ICc8c3ZnIHQ9XCIxNzAzNDgzNTQyODcyXCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMzA5IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI2Mjc0XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTExNDcuMjY4OTYgOTEyLjY4MTQxN2wzNC45MDE2NSAxMTEuMzE4NTgzLTEyNy4xNjUxMTEtNjYuODIzODkxYTYwNC43ODczMTMgNjA0Ljc4NzMxMyAwIDAgMS0xMzkuMDgyNzQ3IDIyLjI2MzcxN2MtMjIwLjYwNzIzOSAwLTM5NC4yOTY5NjktMTQ0LjYxNTkzNi0zOTQuMjk2OTY5LTMyMi43NTg0MDlzMTczLjUyNjAyNi0zMjIuODg5MzcyIDM5NC4yOTY5NjktMzIyLjg4OTM3MkMxMTI0LjIxOTQ2NSAzMzMuNjYxMDgyIDEzMDkuNjMwMzg4IDQ3OC42Njk5MDcgMTMwOS42MzAzODggNjU2LjU1MDQ1NGMwIDEwMC4yODQ5NDctNjkuMzQ0OTI5IDE4OS4xNDMzNjktMTYyLjM2MTQyOCAyNTYuMTMwOTYzek03ODguMDcwMDg2IDUxMS44NjkwMzdhNDkuMTExMTQgNDkuMTExMTQgMCAwIDAtNDYuMzYwOTE2IDQ0LjQ5NDY5MiA0OC43ODM3MzIgNDguNzgzNzMyIDAgMCAwIDQ2LjM2MDkxNiA0NC40OTQ2OTMgNTIuMDkwNTQ5IDUyLjA5MDU0OSAwIDAgMCA1Ny45ODM4ODUtNDQuNDk0NjkzIDUyLjM4NTIxNiA1Mi4zODUyMTYgMCAwIDAtNTcuOTgzODg1LTQ0LjQ5NDY5MnogbTI1NC45ODUwMzYgMGE0OC44ODE5NTQgNDguODgxOTU0IDAgMCAwLTQ2LjA5ODk5IDQ0LjQ5NDY5MiA0OC42MjAwMjggNDguNjIwMDI4IDAgMCAwIDQ2LjA5ODk5IDQ0LjQ5NDY5MyA1Mi4zODUyMTYgNTIuMzg1MjE2IDAgMCAwIDU3Ljk4Mzg4Ni00NC40OTQ2OTMgNTIuNTgxNjYgNTIuNTgxNjYgMCAwIDAtNTcuOTUxMTQ1LTQ0LjQ5NDY5MnogbS01NTAuNTY4NjE1IDE1MC4wMTgxNjFhMzE4LjU2NzU5MiAzMTguNTY3NTkyIDAgMCAwIDE0LjMwNzcxMiA5My4yMTI5NDNjLTE0LjMwNzcxMiAxLjA4MDQ0NS0yOC43NDYzODcgMS43NjgwMDEtNDMuMjgzMjg0IDEuNzY4MDAxYTgyNy4yOTM1MTYgODI3LjI5MzUxNiAwIDAgMS0xNjIuMzk0MTY4LTIyLjI5NjQ1OGwtMTYyLjAwMTI3OSA3Ny45NTU3NDkgNDYuMzI4MTc1LTEzMy44MTE0ODVDNjkuNDEwNDExIDYwMC44NTg0MjIgMCA1MDAuNTA3OTkzIDAgMzc4LjM4NDk2IDAgMTY2LjY4MzIwOCAyMDguNjg5NjAyIDAgNDYzLjUxMDkzNSAwYzIyNy45MDg0MjggMCA0MjcuNTk0MzIyIDEzMy4xODk0MSA0NjcuNzAxNzUyIDMxMi4zNzk1ODhhNDI3LjQ2MzM1OCA0MjcuNDYzMzU4IDAgMCAwLTQ0LjYyNTY1NS0yLjYxOTI2MWMtMjIwLjI0NzA5IDAtMzk0LjEwMDUyNCAxNTcuNzQ0OTgtMzk0LjEwMDUyNSAzNTIuMTI2ODcxek0zMTIuOTAzNDQgMTg5LjE0MzM2OWE2NC4yNzAxMTEgNjQuMjcwMTExIDAgMCAwLTY5LjgwMzI5OSA1NS42NTkyOTEgNjQuNTMyMDM3IDY0LjUzMjAzNyAwIDAgMCA2OS44MDMyOTkgNTUuNjU5MjkyIDUzLjY5NDg0NiA1My42OTQ4NDYgMCAwIDAgNTcuODUyOTIzLTU1LjY1OTI5MiA1My40NjU2NjEgNTMuNDY1NjYxIDAgMCAwLTU3Ljg1MjkyMy01NS42NTkyOTF6IG0zMjQuNDI4MTg4IDBhNjQuMDQwOTI2IDY0LjA0MDkyNiAwIDAgMC02OS41NzQxMTQgNTUuNjU5MjkxIDY0LjMwMjg1MiA2NC4zMDI4NTIgMCAwIDAgNjkuNTc0MTE0IDU1LjY1OTI5MiA1My42OTQ4NDYgNTMuNjk0ODQ2IDAgMCAwIDU3Ljk1MTE0NS01NS42NTkyOTIgNTMuNDY1NjYxIDUzLjQ2NTY2MSAwIDAgMC01Ny45NTExNDUtNTUuNjU5MjkxelwiIHAtaWQ9XCI2Mjc1XCI+PC9wYXRoPjwvc3ZnPidcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogJ2h0dHBzOi8vd2VpeGluLnFxLmNvbS8nLFxuICAgICAgICAvLyBZb3UgY2FuIGluY2x1ZGUgYSBjdXN0b20gbGFiZWwgZm9yIGFjY2Vzc2liaWxpdHkgdG9vIChvcHRpb25hbCBidXQgcmVjb21tZW5kZWQpOlxuICAgICAgICBhcmlhTGFiZWw6ICd3ZWNoYXQnXG4gICAgICB9XG4gICAgICBdLFxuXG4gICAgLy9cdTYyNEJcdTY3M0FcdTdBRUZcdTZERjFcdTZENDVcdTZBMjFcdTVGMEZcdTY1ODdcdTVCNTdcdTRGRUVcdTY1MzlcbiAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU2REYxXHU2RDQ1XHU2QTIxXHU1RjBGJyxcblxuXG4gICAgLy9cdTRGQTdcdThGQjlcdTY4MEZcdTY1ODdcdTVCNTdcdTY2RjRcdTY1MzkoXHU3OUZCXHU1MkE4XHU3QUVGKVxuICAgIHNpZGViYXJNZW51TGFiZWw6J1x1NzZFRVx1NUY1NScsXG5cbiAgICAvL1x1OEZENFx1NTZERVx1OTg3Nlx1OTBFOFx1NjU4N1x1NUI1N1x1NEZFRVx1NjUzOShcdTc5RkJcdTUyQThcdTdBRUYpXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDonXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4JyxcblxuXG4gICAgLy9cdTU5MjdcdTdFQjJcdTY2M0VcdTc5M0EyLTNcdTdFQTdcdTY4MDdcdTk4OThcbiAgICBvdXRsaW5lOiB7XG4gICAgICBsZXZlbDogWzIsM10sXG4gICAgICBsYWJlbDogJ1x1NUY1M1x1NTI0RFx1OTg3NVx1NTkyN1x1N0VCMidcbiAgICB9LFxuXG5cbiAgICAvL1x1N0YxNlx1OEY5MVx1NjcyQ1x1OTg3NVxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL3poYW5namFjazEvdml0ZXByZXNzL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdcdTU3MjhHaXRIdWJcdTdGMTZcdThGOTFcdTY3MkNcdTk4NzUnXG4gICAgfSxcblxuICAgIC8vXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTBBXHU0RTBCXHU5ODc1XHU1NDBEXG4gICAgZG9jRm9vdGVyOiB7IFxuICAgICAgcHJldjogJ1x1NEUwQVx1NEUwMFx1OTg3NScsIFxuICAgICAgbmV4dDogJ1x1NEUwQlx1NEUwMFx1OTg3NScsIFxuICAgIH0sIFxuXG4gIH0sXG4gIH0pXG4gIGNvbnN0IG1lcm1haWRDb25maWcgPSB7XG4gICAgLy8geW91ciBtZXJtYWlkIGNvbmZpZyBoZXJlLi4uXG4gIH07XG4gIGV4cG9ydCBkZWZhdWx0IHdpdGhNZXJtYWlkKGNvbmZpZyk7XG5cblxuICAgIFxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VixTQUFTLG9CQUFvQjtBQUl6WCxPQUFPLGNBQWM7QUFFckIsU0FBUyxtQkFBbUI7QUFDNUIsSUFBTSxTQUFTLGFBQWE7QUFBQSxFQUV4QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUE7QUFBQSxFQUlmLE1BQU07QUFBQSxJQUNKLENBQUMsUUFBTyxFQUFFLEtBQUssUUFBUSxNQUFNLFlBQVcsQ0FBQztBQUFBLEVBQzNDO0FBQUE7QUFBQSxFQUdBLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHTixTQUFTO0FBQUE7QUFBQSxFQUVUO0FBQUE7QUFBQSxFQUlBLFlBQVc7QUFBQTtBQUFBLEVBR1gsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLFVBQVU7QUFBQTtBQUFBLElBRVIsYUFBYTtBQUFBO0FBQUEsSUFHYixRQUFRLENBQUMsT0FBTztBQUNkLFNBQUcsSUFBSSxRQUFRO0FBQUEsSUFDakI7QUFBQTtBQUFBLElBSUEsT0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUVGO0FBQUE7QUFBQSxFQUtBLGFBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVVgsS0FB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
