const app = require('express')();
const server = require('http').createServer(app);
const options = {};
const io = require('socket.io')(server, options);
const port = 8081;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/update', (req, res) => {
    //console.log('got something', req, res);
    io.sockets.emit('update', req.body);
    console.log('Received request', req.body);
    //return res.send('Recevied a post method!!');
    res.status(200).send('Request received!');
    
})


io.sockets.on('connection', function(socket){    
    socket.on('logged_in', function(payload){
        console.log('incoming log in!', payload);
    })
})

server.listen(port);