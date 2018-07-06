var fs = require('fs');

fs.readdir('/home/kmathe/Documents/', (err, data)=> {
    console.log(data)
})