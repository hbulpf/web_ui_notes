# 开源API设计系统

## Swagger

安装 swagger
```
npm install -g swagger
```

初始化项目 
```
swagger project create hello-world
```

启动 swagger edit
```
swagger project edit
```

启动 swagger API
```
swagger project start
```

参考: https://www.npmjs.com/package/swagger
### FAQ
1. node12 的 `Cannot find module 'api\fittings\swagger_router'` 问题， node10 没有此问题

    临时修改文件: node_modules/bagpipes/lib/fittingTypes/user.js:
    ```
    var split = err.message.split(path.sep);
    ```
    为
    ```
    var split = err.message.split('\n')[0].split(path.sep);
    ```
    参考: https://github.com/swagger-api/swagger-node/issues/586