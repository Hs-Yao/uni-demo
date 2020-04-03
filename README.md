# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


20200403测试

如何在uni-app使用iconfont
uni-app不支持使用本地字体图标，所以使用线上的
https://www.jianshu.com/p/7fc08b1b4d85

插槽
只支持v-slot:name = '{props}'这种解构赋值的写法

引用全局组件不支持vue.use方法

引入vant组件
下载vant组件包，放到项目的wxcomponents中（必须这个目录），然后在pages.json中相应页面创建usingComponents。