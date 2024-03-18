const app=require('./app');
const PORT = 3001;
const HOST = '127.0.0.1';

const server =app.listen(PORT,HOST,()=>{
  console.log(`Server is listenning to ${server.address().port}`)
});