const posts = require('./posts')
const express = require('express');
const app = express();
const port = 3001;
const postsRouter = require('./routers/posts.js')
const {log} = require('console')






app.use('/posts', postsRouter)



app.listen(port, ()=> {
log(`Sono in ascolto sulla porta http://localhost:${port}`)
});