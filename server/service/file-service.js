const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const convert = require('easyimage').convert;

const getFormat = (str) => str.match(/\.[0-9a-z]+$/i)[0];


class FileService {
    saveFile(file) {
        const fileName = uuid.v4() + getFormat(file.path);
        const filePath = path.resolve('static', fileName);
        fs.rename(file.path, filePath, (err) => {
            if (err) throw err
        })
        return fileName
    }
    
    // bad works so it's not used
    async convertToJpg(file) {
        let src = file.path
        let fileFormat = getFormat(src)
        let dst = src.replace(fileFormat, '.jpg');

        await convert({src, dst, quality: 80},
            function(err, stdout){ 
                if (stdout) { 
                    console.log('stdout', stdout);
                    //here you can run a script to delete src
                }
            }
        );
    }
}

module.exports = new FileService();