# 页面


## 站点配置


### 网页标题

使用 `titleTemplate` 自定义整个网页标题，一般不使用

::: tip 与 站点标题 的区别
[站点标题](#站点标题) `title` 是固定的，每个页面都会显示

网页标题 `titleTemplate` 是不固定的，它随着每个页面的 `<h1>` 标题而变动，如 标题是 `# 页面` ，那么显示的就是 `页面 | VitePress` ，除非自定义给它写死 
:::

```ts{5}
export default defineConfig({
  lang: 'zh-CN',
  title: "VitePress",
  description: "我的vitpress文档教程",
  titleTemplate: '另起标题会覆盖title', // [!code focus]
  // titleTemplate: ':title - 快速上手', //完全自定义标题，:title 不要动，改后面的
  // titleTemplate: false, //关闭标题
})
```





### Fav图标

路径默认public目录，在 `docs`目录下新建 `public`目录即可

```ts{3-6}
export default defineConfig({

  //fav图标
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],

})
```

::: warning 注意
如果你使用路径 `/logo.png` 无反应，可尝试先用相对路径 `../public/logo.png`

另：如果你的 [Base 设置非根目录](./assets.md#base)，fav图标路径也要做出改变
:::




::: details 官方配置添加谷歌字体
```ts
export default {
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      // would render:
      //
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],

    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`
      // would render:
      //
      // <script id="register-sw">
      // ;(() => {
      //   if ('serviceWorker' in navigator) {
      //     navigator.serviceWorker.register('/sw.js')
      //   }
      // })()
      // </script>
    ]
  ]
}
```
:::





### 深色主题

默认是浅色模式，可自行开启或更换

```ts{5}
export default defineConfig({

  //appearance:true, //默认浅色且开启切换
  //启用深色模式
  appearance:'dark', // [!code focus]
  // appearance:false, // 关闭
})
```



### 多语言

要启用多语言支持，首先需要使用如下的文件目录结构

```
.
├─ docs
│  ├─ en
│  │  ├─ index.md   <--英文首页
│  │  ├─ ...
│  │  ...
│  └─ fr
│  │  ├─ index.md   <--法语首页
│  │  ├─ ...
│  │  ...  
│  └─ index.md      <--中文首页(默认)
└─ package.json
```


::: tip 说明
实际就是新建一个语言目录，再把根目录所有文档，翻译后再放进去

本次仅演示下首页，其他的自行配置吧！
:::

默认读取目录的index文件，无需手动填写 `index`

```ts{3-19}
export default defineConfig({

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/fr/',
    }
  },

})
```


### 默认主题

本文仅演示默认主题设置

::: tip 说明
主题配置允许您自定义主题，通过配置文件中的themeConfig选项定义主题配置
:::

```ts
export default defineConfig({

  // 主题配置
  themeConfig: {
    logo: '',
    nav: [...],
    sidebar: { ... },
  },
})
```





### Logo

网站的Logo图标还没有，下方是目录表

```md{6}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  └─ public             <--静态资源目录
│  │  └─ logo.png        <--logo
│  └─ index.md
└─ package.json

```
根据目录得知logo文件的位置，在 `doc - public` 文件夹

::: tip 说明
依次新建public文件夹，并放入logo即可
:::

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //左上角logo
    logo: '/logo.png',
  },

})
```

如果你不想要看到文字，可以选择隐藏

```ts{6}
export default defineConfig({

  themeConfig: {
    //左上角logo
    logo: '/logo.png',
    siteTitle: false, //标题隐藏 // [!code focus]
  },

})
```



### 站点标题

如果设置后，会覆盖原本的 [网页标题](#网页标题) !

```ts{4-5}
export default defineConfig({

  themeConfig: {
    // 设置站点标题
    siteTitle: 'Hello World', // [!code focus]
    // siteTitle: false, // 关闭标题
  },

})
```




## 导航栏


### 导航菜单

一个基础的导航，首页、文章路径以及外站链接

::: tip 说明
text是导航中显示的文本

link为链接或者实际文件的路径，不带 `.md` 前缀，并始终以 `/` 开头
:::

```ts{4-9}
export default defineConfig({

  themeConfig: {
    //导航栏
    nav: [
      { text: '首页', link: '/' }, 
      { text: '快速上手', link: '/getting-started' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ], 
  },

})
```

若想要下拉式菜单导航，就需要加一个 `iteams`


```ts{4-16}
export default defineConfig({

  themeConfig: {
    //导航栏
    nav: [
      { text: '首页', link: '/' }, 
      {
        text: '指南',
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' }
        ]
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ], 
  },

})
```

给下拉菜单赋予分组标题，就要再次嵌套 `iteams`


```ts{4-38}
export default defineConfig({

  themeConfig: {
    //导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          {
            // 分组标题1
            text: '介绍',
            items: [
              { text: '前言', link: '/preface' },
            ],
          },
          {
            // 分组标题2
            text: '基础设置',
            items: [
              { text: '快速上手', link: '/getting-started' },
              { text: '配置', link: '/configuration' },
              { text: '页面', link: '/page' },
              { text: 'Frontmatter', link: '/frontmatter' },
            ],
          },
          {
            // 分组标题3
            text: '进阶玩法',
            items: [
              { text: 'Markdown', link: '/Markdown' },
              { text: '静态部署', link: '/assets' },
            ],
          },
        ],
      },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],
  },

})
```



### 社交链接

可以自行添加，支持SVG


```ts{4-9}
export default defineConfig({

  themeConfig: {
    //社交链接 // [!code focus]
    socialLinks: [ // [!code focus]
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }, // [!code focus]
      { icon: 'twitter', link: 'https://twitter.com/' }, // [!code focus]
      { icon: 'discord', link: 'https://chat.vitejs.dev/' },  // [!code focus]
    ], // [!code focus]
  },

})
```

vitepress自带的其他社交图标

```ts{3-12}
/* node_modules\vitepress\types\default-theme.d.ts */
export type SocialLinkIcon =
    | 'discord'
    | 'facebook'
    | 'github'
    | 'instagram'
    | 'linkedin'
    | 'mastodon'
    | 'slack'
    | 'twitter'
    | 'x'
    | 'youtube'
    | { svg: string }
```

还可以自定义SVG图标，比如：微信

我这里使用阿里旗下的 [iconfont](https://www.iconfont.cn/)，搜索 `微信` 找到合适的下载 `复制svg代码`

::: tip 说明
其他图标网站：[xicons·需翻墙打开](https://www.xicons.org/#/zh-CN)、字节跳动旗下的 [iconpark](https://iconpark.oceanengine.com/official)
:::

我这里使用的是这个

```html
<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>
```

粘贴到 `config.mts` 配置文件中

```ts{4-14}
export default defineConfig({

  themeConfig: {
    //自定义社交链接 
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://weixin.qq.com/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
      }
    ], 
  },

})
```

::: warning 关于微信
如果真的要加微信，建议用 [@zhheo](https://github.com/zhheo/Wechat-Official-Account-Web) 的项目

自己搭一个，界面也很美观
:::



### 深浅模式文字

手机端默认显示 `Appearance` ，你也可以自定义显示文字

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //手机端深浅模式文字修改 // [!code focus]
    darkModeSwitchLabel: '深浅模式', // [!code focus]
  },

})
```





## 搜索框


本地的 [minisearch](https://github.com/lucaong/minisearch/) 和 [Algolia DocSearch](https://docsearch.algolia.com/) 都是全局搜索都好用


### 本地搜索

得益于 [minisearch](https://github.com/lucaong/minisearch/)，VitePress 支持使用浏览器内索引进行模糊全文搜索


```ts{4-8}
export default defineConfig({

  themeConfig: {
    //本地搜索 // [!code focus]
    search: { // [!code focus]
      provider: 'local' // [!code focus]
    }, // [!code focus]
  },

})
```


如果你搭建了多语言站点，可以更细致的配置搜索

```ts{4-27}
export default defineConfig({

  themeConfig: {
    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },
  },

})
```




### Algolia

[Algolia DocSearch](https://docsearch.algolia.com/) 要么自行申请，要么自行搭建

* [官方申请：查看我之前搭建 VuePress 时写的教程](https://vuepress.yiov.top/guide/docsearch.html#%E5%AE%98%E6%96%B9%E7%94%B3%E8%AF%B7-%E9%80%89%E5%85%B6%E4%B8%80)

* [自建爬虫：查看我之前搭建 VuePress 时写的教程](https://vuepress.yiov.top/guide/docsearch.html#%E8%87%AA%E5%BB%BA%E7%88%AC%E8%99%AB-%E9%80%89%E5%85%B6%E4%B8%80)


我们先看一下 VitePress 里的配置

```ts{4-12}
export default defineConfig({

  themeConfig: {
    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '<Application ID>',
        apiKey: '<Search-Only API Key>',
        indexName: '<INDEX_NAME>',
      },
    },
  },

})
```


多语言配置

```ts{4-55}
export default defineConfig({

  themeConfig: {
    //Algolia搜索
    search: {
      provider: 'algolia',
      options: {
        appId: '<Application ID>',
        apiKey: '<Search-Only API Key>',
        indexName: '<INDEX_NAME>',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
              },
            },
          },
        },
      },
    },
  },

})
```

官方爬虫设置

```ts
new Crawler({
  appId: '...',
  apiKey: '...',
  rateLimit: 8,
  startUrls: ['https://vitepress.dev/'],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ['https://vitepress.dev/**'],
  schedule: 'at 05:10 on Saturday',
  actions: [
    {
      indexName: 'vitepress',
      pathsToMatch: ['https://vitepress.dev/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: '.content h1',
            content: '.content p, .content li',
            lvl0: {
              selectors: '',
              defaultValue: 'Documentation'
            },
            lvl2: '.content h2',
            lvl3: '.content h3',
            lvl4: '.content h4',
            lvl5: '.content h5'
          },
          indexHeadings: true
        })
      }
    }
  ],
  initialIndexSettings: {
    vitepress: {
      attributesForFaceting: ['type', 'lang'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
      attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
      searchableAttributes: [
        'unordered(hierarchy_radio_camel.lvl0)',
        'unordered(hierarchy_radio.lvl0)',
        'unordered(hierarchy_radio_camel.lvl1)',
        'unordered(hierarchy_radio.lvl1)',
        'unordered(hierarchy_radio_camel.lvl2)',
        'unordered(hierarchy_radio.lvl2)',
        'unordered(hierarchy_radio_camel.lvl3)',
        'unordered(hierarchy_radio.lvl3)',
        'unordered(hierarchy_radio_camel.lvl4)',
        'unordered(hierarchy_radio.lvl4)',
        'unordered(hierarchy_radio_camel.lvl5)',
        'unordered(hierarchy_radio.lvl5)',
        'unordered(hierarchy_radio_camel.lvl6)',
        'unordered(hierarchy_radio.lvl6)',
        'unordered(hierarchy_camel.lvl0)',
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy_camel.lvl1)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy_camel.lvl2)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy_camel.lvl3)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy_camel.lvl4)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy_camel.lvl5)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy_camel.lvl6)',
        'unordered(hierarchy.lvl6)',
        'content'
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)'
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom'
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional'
    }
  }
})
```





自建爬虫配置

```json
{
    "index_name": "你的索引名",
    "start_urls": [
        {
            "url": "https://你的网站",
            "selectors_key": ""
        }
    ],
    "stop_urls": [],
    "selectors": {
        "default": {
            "lvl0": {
                "selector": "",
                "default_value": "我的文档"
            },
            "lvl1": ".content h1",
            "lvl2": ".content h2",
            "lvl3": ".content h3",
            "lvl4": ".content h4",
            "lvl5": ".content h5",
            "lvl6": ".content h6",
            "text": ".content p, .content li",
            "lang": {
                "selector": "/html/@lang",
                "type": "xpath",
                "global": true
            }
        }
    },
    "custom_settings": {
        "attributesForFaceting": [
            "lang"
        ]
    }
}
```






## 首页

我们使用 [Frontmatter](./frontmatter.md) ，在 `index.md` 中进行配置和修改



## 页脚


```ts{4-8}
export default defineConfig({

  themeConfig: {
    //页脚 // [!code focus]
    footer: { // [!code focus]
      message: 'Released under the MIT License.', // [!code focus]
      copyright: 'Copyright © 2019-2023present Evan You', // [!code focus]
    }, // [!code focus]
  },

})
```


如果你有备案，会需要跳转到工信部，使用html代码就行了

```ts{7}
export default defineConfig({

  themeConfig: {
    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>', // [!code focus]
    },
  },

})
```




## 侧边栏

最简单的形式是传递单个链接，但这样非常单调，我们可以使用 `items` 分组

### 常用配置

`text` 文字可以自定义，`link` 填文章路径，不需要带`.md`

```ts{4-19}
export default defineConfig({

  themeConfig: {
    //侧边栏
    sidebar: [
      {
        //分组标题
        text: '指南',
        items: [
          { text: '前言', link: '/preface' },
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
          { text: '页面', link: '/page' },
          { text: 'Frontmatter', link: '/frontmatter' },
          { text: 'Markdown', link: '/markdown' },
          { text: '静态部署', link: '/assets' },
        ],
      },
    ],
    },

})
```


当然我们也可以进行多个分组

```ts{4-31}
export default defineConfig({

  themeConfig: {
    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '介绍',
        items: [
          { text: '前言', link: '/preface' },
        ],
      },
      {
        //分组标题2
        text: '基础配置',
        items: [
          { text: '快速上手', link: '/getting-started' },
          { text: '配置', link: '/configuration' },
          { text: '页面', link: '/page' },
          { text: 'Frontmatter', link: '/frontmatter' },
        ],
      },
      {
        //分组标题3
        text: '进阶玩法',
        items: [
          { text: 'Markdown', link: '/markdown' },
          { text: '静态部署', link: '/assets' },
        ],
      },
    ],
  },

})
```


多个侧边栏也是可以的，有其他目录可以参考官方的目录表样式


```
.
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```

那么我们的配置就是


```ts{4-31}
export default defineConfig({

  themeConfig: {
    //侧边栏
    sidebar: {
      // 目录1
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ],
        },
      ],

      // 目录2
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ],
        },
      ],
    },
  },

})
```

如果需要可折叠的，添加 `collapsed`选项，它会显示一个切换按钮来隐藏/显示

::: tip 说明
如果你不想开启，将它设为 `true` ，或者直接不配置
:::


```ts{4-31}
export default defineConfig({

  themeConfig: {
    //侧边栏
    sidebar: [
      {
        text: 'Section Title A',
        collapsed: false,
        items: [...]
      },
    ],
  },

})
```


### 侧边栏(移动端)

更改手机端菜单文字显示，默认 `Menu`


```ts{4-5}
export default defineConfig({

  themeConfig: {
    //侧边栏文字更改(移动端) // [!code focus]
    sidebarMenuLabel:'目录', // [!code focus]
    },

})
```

### 返回顶部

更改手机端菜单文字显示，默认 `Return to top`

```ts{4-5}
export default defineConfig({

  themeConfig: {
    //返回顶部文字修改 // [!code focus]
    returnToTopLabel:'返回顶部', // [!code focus]
    },

})
```


### 大纲

右侧的大纲，默认显示是二级标题，通过设置 `outline` 实现多级标题

```ts{4-8}
export default defineConfig({

  themeConfig: {
    outline: { // [!code focus:7]
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    // outline:false, // 关闭标题显示
    // outlineTitle:'当前页大纲', //老方式设置标题
  },

})
```




## 编辑本页

::: warning 注意
会被 [Frontmatter配置](./frontmatter.md#编辑本页) 覆盖
:::

```ts{4-8}
export default defineConfig({

  themeConfig: {
    //编辑本页 // [!code focus]
    editLink: { // [!code focus]
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库 // [!code focus]
      text: '在GitHub编辑本页' // [!code focus]
    }, // [!code focus]
  },

})
```




## 上次更新

如果你想添加页面的更新时间就配置，我反正是没搞定

```ts{3,6-13}
export default defineConfig({

  lastUpdated: true, //此配置不会立即生效，需git提交后爬取时间戳，本地报错可以先注释

  themeConfig: {
    //上次更新时间
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
  },

})
```


## 上/下页

默认从侧边栏配置中读取，如果想单独关闭或自定义请参照 [Frontmatter](./frontmatter.md#上-下页)

::: tip 说明
仅修改显示的文字

`Pagina prior` 可以改成 上一页

`Proxima pagina` 可以改成 下一页
:::


```ts{4-8}
export default defineConfig({

  themeConfig: {
    //自定义上下页名 // [!code focus]
    docFooter: { // [!code focus]
      prev: '上一页', // [!code focus]
      next: '下一页', // [!code focus]
    }, // [!code focus]
  },

})


```


油管链接图标：[Youtube](https://www.youtube.com/)

B站链接图标：[哔哩哔哩](https://www.bilibili.com/)
