const http = require('http');

const data = [
    {
        id : 1,
        name : 'John'
    },
    {
        id : 2,
        name : 'Metythron'
    },
    {
        id : 3,
        name : 'Xyber'
    },

]


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Language', 'en-US');
    res.setHeader('Date', new Date(Date.now()));
    res.setHeader('X-Powered-By', 'Node.js');

    res.end(
        JSON.stringify({
            success : true,
            results : data.length,
            data : data
        })  
    )

});

server.listen(3000, () => {
    console.log('Server is started on port 3000');
});


// -------------------------------------------














