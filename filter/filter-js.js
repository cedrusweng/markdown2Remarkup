 
function filter(data) {
    return data.replace(/#+\s/ig, a => {
        let len = a.length;
        let res = '';
        while ( --len ) {
            res += '=';
        }
        return res + ' ';
    })
    .replace(/\*\*\[⬆ 返回目录\]\(#table\-of\-contents\)\*\*/ig, '')
    .replace(/\[(.*?)\]\((.*?)\)/ig, (a, word, link) => {
        return '[[' + link + ' | ' + word + ']]';
    })
    .replace(/\s*?```(javascript)?/g, (a, b) => {
        let res = '\n```';
        if(b){
            res += 'lang=' + b;
        }
        return res;
        
    })
    .replace(/(\s{2,})\+\s/ig, '$1* ')
    .replace(/<a([^>]*?)><\/a>/ig, '');
}

module.exports = filter;