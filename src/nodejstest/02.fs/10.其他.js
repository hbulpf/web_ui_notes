
var fs = require("fs");

// 判断文件夹是否存在
var isExist = fs.existsSync("hello")
console.log(isExist)


// 创建删除文件夹
// fs.mkdirSync("hlso");
fs.mkdir("hlso",function (err) {
    if(!err){
        console.log("文件夹创建成功")
    }
});

fs.rmdir("hlso",function (err) {
    if(!err){
        console.log("文件夹删除成功")
    }
})


// 查看当前文件状态
fs.stat("hello.txt",function (err,stat) {
    if(!err){
        console.log(stat)
    }
})


// 读取文件目录，列出文件
fs.readdir(".",function (err,files) {
    if(!err){
        console.log(files)
    }
})

// 断开文件和磁盘的链接: 等于删除
fs.unlink("hello2.txt",function (err) {
    if(!err) {
        console.log("删除文件成功")
    }
})

//截断文件
fs.truncateSync("hello3.txt",100)


//重命名文件
fs.renameSync("hello3.txt","hello3s.txt")

// 监视文件的变化
// fs.watchFile("hello.txt",{interval:1000},function (curr,prev) {
//     console.log("原始文件大小:" , prev.size)
//     console.log("当前文件大小:" , curr.size)
// });