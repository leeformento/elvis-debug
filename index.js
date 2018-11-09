const express = require('express');
const cors = require('cors');

const server = require('./api/server.js');
const userRouter = require('./users/userRouter.js');
const postsRouter = require('./posts/postsRouter');
var path = require('path');
var public = path.join(__dirname, 'blog');

server.use(cors());
server.use(express.json());
//USER METHODS
server.use('/api/users/', userRouter);
server.get('/api/users/:id', userRouter);
server.get('/api/users/posts/:id', userRouter);
server.post('/api/users', userRouter);
server.delete('/api/users/:id', userRouter);
server.put('/api/users/:id', userRouter);

//POSTS METHODS
server.use('/api/posts/', postsRouter);
server.get('/api/posts/:id', postsRouter);
server.post('/api/posts', postsRouter);
server.delete('/api/posts/:id', postsRouter);
server.put('/api/posts/:id', postsRouter);

// server.use(express.static(path.join(__dirname, 'public/src')));

// server.use(function(){
//     server.use('/', express.static(__dirname + '/'));
//     server.use(express.static(__dirname + '/blog/public/src'));
//   })
// server.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/blog/src/App.js'));
// });
server.get('/', function(req, res) {
    res.sendFile(path.join(blog, 'App.js'));
});

server.use('/', express.static(public));

module.exports = server;



//A COMMIT TO SEE IF DEPLOY WORKS

//check

const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));