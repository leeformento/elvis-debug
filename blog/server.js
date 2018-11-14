// const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path'); //

// Normalize a port into a string, number
// get port form enviroment and store in express
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const server = require('./api/server.js');
const userRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postsRouter');

server.use(cors());
server.use(express.json());

// event listener
const dev = server.get('env') !== 'production'
if (!dev) {
    server.disable('x-powered-by')
    server.use(compression())
    server.use(morgan('common'))
}

//USER METHODS
server.use('/api/users/', userRouter);
server.get('/api/users/:id', userRouter);
server.get('/api/users/posts/:id', userRouter);
server.post('/api/users', userRouter);
server.delete('/api/users/:id', userRouter);
server.put('/api/users/:id', userRouter);

server.use('/api/posts/', postsRouter);
server.get('/api/posts/:id', postsRouter);
server.get('/api/posts/posts/:id', postsRouter);
server.post('/api/posts/', postsRouter);
server.delete('/api/posts/:id', postsRouter);
server.put('/api/posts/:id', postsRouter);

//the path that you provide to the express.static function is relative to the directory from where you launch your node process. 
//If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve:


if (dev) {
    server.use(morgan('dev'));
}

//POSTS METHODS
server.use('/api/posts/', postsRouter);
server.get('/api/posts/:id', postsRouter);
server.post('/api/posts', postsRouter);
server.delete('/api/posts/:id', postsRouter);
server.put('/api/posts/:id', postsRouter);


server.listen(PORT, err => {
    if(err) throw err
    console.log('server started')
})

// NODE_ENV=production node app.js == see in prod