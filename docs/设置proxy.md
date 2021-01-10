# 前端设置proxy

如果在前端开发使用 **NPM** 或者 **YARN** 下载过程中碰到网速非常慢，可以配置国内 **淘宝镜像** 来提升下载速度。具体方法如下

## NPM

#### 查询当前镜像

```shell
npm get registry 
```

#### 设置为淘宝镜像

```shell
npm config set registry https://registry.npm.taobao.org/
```

#### 设置为官方镜像

```shell
npm config set registry https://registry.npmjs.org/
```

## YARN

#### 查询当前镜像

```shell
yarn config get registry
```

#### 设置为淘宝镜像

```shell
yarn config set registry https://registry.npm.taobao.org/
```

#### 设置为官方镜像

```shell
yarn config set registry https://registry.yarnpkg.com
```