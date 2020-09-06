# vue初始化

## 基本步骤

安装vue
```
npm i vue-cli -g
npm install -g webpack
```

初始化项目
```
vue init webpack  DemoName
```

运行项目

``` bash
# 安装依赖
npm install

# 本地8080端口运行
npm run dev

# 构建生产程序
npm run build

# 构建生产程序并产生报告
npm run build --report

# 执行单元测试
npm run unit

# 执行 e2e 测试
npm run e2e

# 执行所有测试
npm test
```

## FAQ
### vue本地无法下载模板

通过vue-cli工具命令vue init webpack vuedemo创建vue项目的时候报错，提示连接超时，应该是下载某个package的时候，需要翻墙，导致出现连接超时。超时错误截图如下：



按照网络上的提示，解决办法是改为离线创建，我们需要下载github仓库中的vue-templates/webpack，然后解压到本地。下载地址为：https://github.com/vuejs-templates/webpack，下载之后，解压到本地用户目录下的.vue-templates目录下。



下载之后的压缩包为webpack-develop.zip，我们解压之后，需要更改目录名为webpack。用户目录下的目录为.vue-templates，注意文件夹名称前面的点(.)。

这样，我们再进行vue init webpack vuedemo命令的时候，需要带上参数--offline表示离线初始化。


## 参考
1. [vue-cli Failed to download repo vuejs-templates/webpack连接超时解决办法](https://blog.csdn.net/feinifi/article/details/104578546)
2. [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)