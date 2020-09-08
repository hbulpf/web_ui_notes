# axios 与原生 ajax对比

[Ajax、fetch、axios的区别与优缺点](https://links.jianshu.com/go?to=https%3A%2F%2Fblog.csdn.net%2Fqq_36407875%2Farticle%2Fdetails%2F84642060)

[axios的github地址](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Faxios%2Faxios)

### 原生ajax

```javascript
    //创建异步对象  
    var xhr = new XMLHttpRequest();
    //设置请求基本信息，并加上请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.open('post', 'test.php' );
    //发送请求
    xhr.send('name=Lan&age=18');
    xhr.onreadystatechange = function () {
        // 这步为判断服务器是否正确响应
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      } 
    };
```

### jqueryAjax



```javascript
var loginBtn =  document.getElementsByTagName("button")[0];
loginBtn.onclick = function(){
    ajax({
        type:"post",
        url:"test.php",
        data:"name=lan&pwd=123456",
        success:function(data){
           console.log(data);
        }
    });
}
```

### fetch

```javascript
fetch('http://www.mozotech.cn/bangbang/index/user/login', {
    method: 'post',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams([
        ["username", "Lan"],["password", "123456"]
    ]).toString()
})
.then(res => {
    console.log(res);
    return res.text();
})
.then(data => {
    console.log(data);
})
```

### axios



```javascript
axios({
    method: 'post',
    url: '/abc/login',
    data: {
        userName: 'Lan',
        password: '123'
    }
})
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});
```

同时发起多个请求：



![img](https:////upload-images.jianshu.io/upload_images/7108739-068a63c60ceee6e0?imageMogr2/auto-orient/strip|imageView2/2/w/478/format/webp)

image

### 对比

1. **几种方式的对比**
    ajax：
    【**优点**：局部更新；原生支持】
    【**缺点**：可能破坏浏览器后退功能；嵌套回调】
    jqueryAjax：
    【在原生的ajax的基础上进行了封装；支持jsonp】
    fetch：
    【**优点**：解决回调地狱】
    【**缺点**：API 偏底层，需要封装;默认不带Cookie，需要手动添加; 浏览器支持情况不是很友好，需要第三方的ployfill】
    axios：
    【几乎完美】
2. **`axios`的特点**
    支持浏览器和node.js
    支持promise
    能**拦截**请求和响应
    能转换请求和响应数据
    能**取消**请求
    自动转换JSON数据
    浏览器端支持**防止CSRF**(跨站请求伪造)

###  `axios`提问

1. 如何将`axios`异步请求同步化处理？



```javascript
//使用 asyns/await 
async getHistoryData (data) {
 try {
   let res = await axios.get('/api/survey/list/', {
     params: data
   })
   this.tableData = res.data.result
   this.totalData = res.data.count
 } catch (err) {
   console.log(err)
   alert('请求出错！')
 }
}
```

1. 为何官方推荐使用`axios`而不用`vue-resource`？

   在`Vue1.x`中，官方推荐使用的`ajax`库是vue-resource。到了`Vue2.x`，官方（尤大）推荐的`ajax`库改为了`Axios`，按照说法是因为已有一个更完备的轮子，就不需要造一个新的。

2. 你了解`axios`的原理吗？有看过它的源码吗？

   [Axios源码深度剖析 ](https://links.jianshu.com/go?to=https%3A%2F%2Fjuejin.im%2Fpost%2F5b0ba2d56fb9a00a1357a334)

3. 你有封装过`axios`吗？主要是封装哪方面的？

   [具体config配置参考](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Faxios%2Faxios%23request-config)
    

   ![img](https:////upload-images.jianshu.io/upload_images/7108739-13321ccd90db0de3?imageMogr2/auto-orient/strip|imageView2/2/w/528/format/webp)

   image

    到具体页面中的应用：

   ![img](https:////upload-images.jianshu.io/upload_images/7108739-c50374564eba33f0?imageMogr2/auto-orient/strip|imageView2/2/w/545/format/webp)

   image

   

4. 如何中断（取消）`axios`的请求？
    

   ![img](https:////upload-images.jianshu.io/upload_images/7108739-6866e049d69700a6?imageMogr2/auto-orient/strip|imageView2/2/w/526/format/webp)

   image

   

5. `axios`怎么解决跨域的问题？
    

   ![img](https:////upload-images.jianshu.io/upload_images/7108739-69ae31510d6de318?imageMogr2/auto-orient/strip|imageView2/2/w/554/format/webp)

   image

   

   - 如果 `server` 端是自己开发的，那么修改相关代码支持跨域即可。如果不是自己开发的，那么可以自己写个后端转发该请求，用代理的方式实现。

   - 跨域这个行为是**浏览器禁止**（浏览器不允许当前页面的所在的源去请求另一个源的数据）的，但是服务端并不禁止

   - 源指协议、端口、域名。只要这个3个中有一个不同就是跨域。 这里列举一个经典的列子：

     

     ```cpp
     协议跨域：
     http://a.baidu.com访问https://a.baidu.com；
     端口跨域：
     http://a.baidu.com:8080访问http://a.baidu.com:80；
     域名跨域：
     http://a.baidu.com访问http://b.baidu.com；
     ```

   - 关键字:`Access-control-Allow-origin`、跨域

   - [几种解决跨域的方法](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.cnblogs.com%2Fpass245939319%2Fp%2F9040802.html)

   - A） 开发模式下，可以在`config`中配置`proxyTable`即可
      

     ![img](https:////upload-images.jianshu.io/upload_images/7108739-976f4a0b9d43019f?imageMogr2/auto-orient/strip|imageView2/2/w/499/format/webp)

     image

     

   - B） 服务端基于spring实现

     ![img](https:////upload-images.jianshu.io/upload_images/7108739-4c6165fa37a004b3?imageMogr2/auto-orient/strip|imageView2/2/w/918/format/webp)

     image

   - C） `CORS`：①即跨源资源共享，它定义了一种浏览器和服务器交互的方式来确定是否允许跨域请求。 ②它是一个妥协，有更大的灵活性，但比起简单地允许所有这些的要求来说更加安全。③但是`CORS`也具有一定的风险性，比如请求中只能说明来自于一个特定的域但不能验证是否可信，而且也容易被第三方入侵。 ④这里一般需要后端配合,开启`cors`。一般各种语言都有类似的包。比如`NodeJS的koa2-cors`
      

     ![img](https:////upload-images.jianshu.io/upload_images/7108739-db01d02dc873aa45?imageMogr2/auto-orient/strip|imageView2/2/w/312/format/webp)

     image

     

   - D） `Nginx`代理`proxy`
      

     ![img](https:////upload-images.jianshu.io/upload_images/7108739-43e68b2383529436?imageMogr2/auto-orient/strip|imageView2/2/w/1150/format/webp)

     image

     

   - E） `express`代理
      

     ![img](https:////upload-images.jianshu.io/upload_images/7108739-ca7484b1b912ac3e?imageMogr2/auto-orient/strip|imageView2/2/w/546/format/webp)

     image

     

   - 请求头自动携带`cookie`时:`config`中配置`withCredentials:true`，否则为`false`【看到有人说：`withCredentials`为`true`的情况下，后端要设置`Access-Control-Allow-Origin`为你的源地址，例如`http://localhost:8080`，不能是`*`，而且还要设置`header('Access-Control-Allow-Credentials: true')`】

   - `config`中配置`qs`：避开`ajax`信使请求，并兼容`Android`？

   

   ```jsx
   import Qs from 'qs'
   ```

![img](https:////upload-images.jianshu.io/upload_images/7108739-ce3cb1c8134f5fea?imageMogr2/auto-orient/strip|imageView2/2/w/439/format/webp)

## 参考
1. [vue学习 axios](https://www.jianshu.com/p/d771bbc61dab)