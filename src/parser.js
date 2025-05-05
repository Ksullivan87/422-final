const fs = require('fs');
const path = require('path');
const { parse } = require('csv');

module.exports = {
    watched: null,
    output: null,
    processed: null,
    // function to set watched directory
    setWatched: function(watch) {
        this.watched = watch;
    },
    //function to set output directory
    setOutput: function (out) { 
        this.output = out;
    },
    //function to set processed directory
    setProcessed: function (proc) {
        this.processed = proc;
    },
    // function to get watched directory
    getWatched: function() {
        return this.watched;
    },
    //function to set output directory
    getOutput: function () { 
        return this.output;
    },
    //function to set processed directory
    getProcessed: function () {
        return this.processed;
    },

    //function to parse csv to json file, returns json to output and csv to processed
    processChange: function (file) {
        const outputFile = path.resolve(this.output, path.basename(file).replace('.csv', '.json'));
        console.info(`Outbound File: `, outputFile);
        const processedFile = path.resolve(this.processed, path.basename(file));
        console.info(`Processed File: `, processedFile);

        let rows = [];

        fs.createReadStream(file)
            .pipe(parse({
                columns: true,
                trim: true
            }))
            .on('data', (row) => {
                rows.push(row);
            })
            .on('end', () => {
                fs.rename(file, processedFile, (err) => {
                    if (err) { return; }

                    fs.writeFile(outputFile, JSON.stringify(rows, null, 2), (err) => {
                        if (err) { return; }

                        console.info('\x1b[38;2;0;0;170m%s\x1b[0m', `Parsed ${file}`);
                    });
                });
            })
            .on('error', (err) => { });
    }
};