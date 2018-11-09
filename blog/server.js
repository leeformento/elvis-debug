// const {createServer} = require('http');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path'); //

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000)

const server = require('./api/server.js');
const userRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postsRouter');

server.use(cors());
server.use(express.json());

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

server.use(express.static(path.resolve(__dirname, 'build')))

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'build', 'index.html'));
});

if (dev) {
    server.use(morgan('dev'));
}

// server.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/blog/src/App.js'));
// });

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