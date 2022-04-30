const path = require('path');
const fs = require('fs');

const Gallery = {
    async start() {
        const directoryPath = path.join(__dirname, 'gallery')

        console.log(directoryPath)

        fs.readdir(directoryPath, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }

            files.forEach(file => {
                console.log("File: " + file); 
            })
        })
    }
}

export { Gallery }