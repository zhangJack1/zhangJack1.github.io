import DefaultTheme from 'vitepress/theme'
import './style/index.css' 

import Video from './components/Video.vue'
import MNavLinks from './components/MNavLinks.vue'
import Navlink from './components/Navlink.vue'

import { h } from 'vue'
import { useData , useRoute } from 'vitepress'

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";
// 添加绘图
import vue from '@vitejs/plugin-vue';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'
import kuang from './components/kuang.vue'
import fold from './components/fold.vue'
import show from './components/show.vue'
import { useLive2d } from 'vitepress-theme-website'
import Vue3StarrySky from 'vue3-starry-sky';
import 'vue3-starry-sky/lib/style.css';
import layout from './components/Layout.vue';
import notice from './components/notice.vue';
import VueAmazingUI from 'vue-amazing-ui';
import 'vue-amazing-ui/css';
import picturewall from './components/picturewall.vue';
import vitepressMusic from 'vitepress-plugin-music';
import 'vitepress-plugin-music/lib/css/index.css';
import backtop from './components/backtop.vue';

const playlist = [
  {
    name: '爱情悬崖',
    author: '周杰伦',
    file: '/music/周杰伦 - 爱情悬崖.mp3',
  },
  {
    name: '你听得到',
    author: '周杰伦',
    file: '/music/周杰伦 - 你听得到.mp3',
  },
  {
    name: '三年二班',
    author: '周杰伦',
    file: '/music/周杰伦 - 三年二班.mp3',
  },
  {
    name: '三年二班',
    author: '周杰伦',
    file: '/music/周杰伦 - 三年二班.mp3',
  },
]

export default {
  extends: DefaultTheme,
  enhanceApp({app}){
    // 注册全局组件
    app.component('Video' , Video)
    app.component('MNavLinks' , MNavLinks)
    app.component('Navlink' , Navlink)
    app.use(FightingDesign);
    app.component('kuang', kuang)
    app.component('fold',fold)
    app.use(Vue3StarrySky)
    app.component('show',show)
    app.component('layout',layout)
    app.component('notice',notice)
    app.use(VueAmazingUI)
    app.component('picturewall',picturewall)
    app.component('backtop',backtop)
    vitepressMusic(playlist)
  },



  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props,{
      'home-hero-image':() => h(picturewall),
    })
    
  },

  
  
  setup() {

    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // Get frontmatter and route
    const { frontmatter } = useData();


    // giscus配置
    giscusTalk({
      repo: 'zhangJack1/commend', //仓库
      repoId: "R_kgDOLwbYtQ", //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOLwbYtc4CezKB', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
      );


  },

}