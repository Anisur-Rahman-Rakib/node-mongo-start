const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors());
app.use(bodyParser.json());

const users = ['anis','rakib','jafor','abul']

// app.get('/', (req, res)=> {
//     res.send('ami akhono pari nai world')
//   });
  app.get('/users/:id', (req, res)=> {
    // console.log(req.params)      
const Id = req.params.id;
const name = users[Id];
res.send({Id,name})

  });

//   post 

app.post('/addUser', (req, res)=> {
    // save to database
    const user = req.body;
    user.id =55 ;
res.send(user);

    // console.log('post data recived', req.body);
  });  


app.listen(4000 , ()=> console.log('listening on port 3000'))