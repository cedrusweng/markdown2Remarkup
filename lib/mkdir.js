const fs = require('fs');

function mkdir(dirpath){  
    //判断是否是第一次调用  
    if ( fs.existsSync(dirpath) ) {
        return;  
    } else {
        mkdir(path.dirname(dirpath));  
        fs.mkdirSync(dirpath);
    }  
} 
module.exports = mkdir;