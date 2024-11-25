const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
    if (app.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello Holberton School!');
    } else if ( request.url === '/students') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('This is the list of our students\n');
        countStudents(process.argv[2])
            .then(() => res.end())
            .catch(err => {
                res.end(err.message);
            });
    }
});
app.listen(1245);
module.exports = app;
