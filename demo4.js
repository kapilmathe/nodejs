var fs = require('fs');

var data = {
    name: 'Bob'
}

fs.writeFile('data2.json', JSON.stringify(data), (err)=> {
    console.log('write is finished',err)
})