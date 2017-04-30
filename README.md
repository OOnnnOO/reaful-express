# 使用

1. 开启 MongoDB，输入数据
2. 执行 `npm install` , `node app.js`
3. 使用 postman 调试请求

## MongoDB 使用
命令行输入`mongo`，进入MongoDB的命令行客户端

切换数据库

```
use bookstore
```

显示数据集（显示表）

```
show collections
```

创建数据集

```
db.createCollect('books')
```

添加数据

```
db.books.insert({name:'suspense')
db.books.insert({author:'James'，title:'The murder House',pages:'320')
```

查询

```
db.books.find()
```

格式化查询结果

```
db.books.find().pretty()
```

## 请求
> 涉及到 `_id` 的请求，请求地址请根据数据库中的`_id`调整

### get
获取所有图书信息

```
http://localhost:3000/api/books
```
获取单种图书的信息

```
http://localhost:3000/api/book/58d38737d8eb6ee9811b9325
```

### post 
新增一种图书

``` json
{
    "title": "JavaScript权威指南",
    "genre": "计算机与互联网",
    "description": "讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScriptAPI",
    "author": "弗兰纳根(David Flanagan)",
    "publisher": "机械工业出版社",
    "pages": "1004",
    "image_url": "https://images-cn.ssl-images-amazon.com/images/I/51QWrj6sodL.jpg",
    "buy_url": "https://www.amazon.cn/dp/B007VISQ1Y/"
}
```
### put
更新一种图书的信息

```json
{
    "title": "JavaScript权威指南(第六版)",
    "genre": "计算机与互联网",
    "description": "讲述的内容涵盖JavaScript语言本身，以及Web浏览器所实现的JavaScriptAPI",
    "author": "弗兰纳根(David Flanagan)",
    "publisher": "机械工业出版社",
    "pages": "1004",
    "image_url": "https://images-cn.ssl-images-amazon.com/images/I/51QWrj6sodL.jpg",
    "buy_url": "https://www.amazon.cn/dp/B007VISQ1Y/"
}
```

### delete
删除一种图书

```
http://localhost:3000/api/book/59056af8bf39f60ec6027486
```

## 视频教程：
<https://www.youtube.com/watch?v=eB9Fq9I5ocs>
