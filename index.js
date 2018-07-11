const fs = require('fs');
const path = require('path');

const filter = require('./filter/filter-css');
const mkdir = require('./lib/mkdir');

let data = '';
let outPath = path.resolve(__dirname ,'output');
const argv = process.argv;
let inputFilePath = argv[2];

if (inputFilePath) {
    outPath = path.resolve(outPath, inputFilePath);
    inputFilePath = path.resolve(__dirname,inputFilePath);
}

mkdir(path.dirname(outPath));


let readable = fs.createReadStream(inputFilePath,{
    encoding:'UTF8'
});

let writeable = fs.createWriteStream(outPath); 

readable.on('data', chunk => {
    data += Buffer.from(chunk).toString();
})
readable.on('open', () => {
    console.log('读取内容中...');
});
readable.on('end', () => {
    console.log('过滤转换中...');
    data = filter(data);
    console.log('过滤转换完成.');
    console.log('开始写入...');
    writeable.write(data,'UTF8');
    // 标记文件末尾
    writeable.end();
    console.log('写入完成.');
}) 

