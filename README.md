# node-test
 
A NodeJS script that reads through a csv file to identify if a provided search key exists within the file.

I've used the 'fs' module’s createReadStream() method to read the data from the CSV file and create a readable stream.
The 'csv-parse' package was used for converting CSV text input into arrays.

## Getting Started

Clone the repo :
```bash
git clone https://github.com/Ruby6991/node-test.git
```

Install NPM packages :
```bash
npm install
```

Invoking the script : {Path to the Script} {Path to the CSV file} {Column index} {Search key}

```bash
node search.js ./file.csv 2 Alberto
```
This returns:
```bash
3, Verdi, Alberto,03/08/1987
```

