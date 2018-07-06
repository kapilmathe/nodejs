fs = require('fs');

// data = fs.readdirSync('/home/kmathe/');
// console.log('data:', data)


function phoneNumber(err, data) {
    console.log('data', data);
}

fs.readdir('/home/kmathe/', phoneNumber);

console.log("this comes after");
