# MongoDB

## MongoDB安装运行

### 下载

下载地址: https://www.mongodb.com/download-center


###  添加环境变量

- Windows:

    计算机右键 → 属性 → 高级 → 环境变量

    找到`path`值，在最后添加 `;C:\Program Files\MongoDB\Server\3.4\bin`

    :warning: 注意用分号与之前的值进行间隔，请根据自己的安装路径设置

- MacOS:

- Linux:

### 服务端

```
# --dbpath 指定数据库保存目录
mongod --dbpath /c/data/db
```

### 客户端

```
# 默认连接本地27017端口(mongodb服务端默认端口)
mongo
```

连接远程服务端

```
mongo url:port/db -u dbuser -p dbpassword
```

程序代码连接：

```
mongodb://<dbuser>:<dbpassword>@URL:PORT/dbname
```


## MongoDB 使用

### 切换数据库

```
use bookstore
```

###显示数据集（显示表）

```
show collections
```

### 集合（collection）

如果插入数据时，集合（这里是：books）不存在，插入操作会自动创建集合

### 添加数据

```
db.books.insert({name:'suspense'})
db.books.insert({author:'James',title:'The murder House',pages:'320'})
```

### 查询

```
db.books.find()
```

### 格式化查询结果

```
db.books.find().pretty()
```
