# vue使用ElementUI常见问题

#### vue+element-ui打包后找不到字体和图标库

在build/utils.js下找到
```
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
```    

加上

```
publicPath: '../../'
```

## 参考
1. [vue+element-ui打包后找不到字体和图标库](https://blog.csdn.net/qq_36289377/article/details/93068971)