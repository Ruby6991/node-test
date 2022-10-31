const fs = require("fs");
const { parse } = require("csv-parse");

/*Check if required arguments are present*/
if (process.argv.length < 5) {
    console.error('Please provide all the required arguments');
    process.exit(1);
}

const filepath = process.argv[2];
const index = process.argv[3];
const query = process.argv[4];
let result = 'Match Not Found';

if (fs.existsSync(filepath)) {

    fs.createReadStream(filepath)
        .pipe(parse({ delimiter: ",", from_line: 1 }))
        .on("data", function (row) {
            if (row.length > index) {

                /*Compare the search key against the value in the specified index*/
                if (row[index].toLowerCase() === query.toLowerCase()) {
                    result = row.toString();
                }

            } else if (row.length <= index) {
                result = 'Specified index does not exist';
            }
        })
        /* Print out result once the complete file is read */
        .on("end", function () {
            console.log(result);
        })
        /* Error handling */
        .on("error", function (error) {
            console.log(error.message);
        });

} else {
    console.log('The file does not exist');
}


