const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./db/users.json');

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(express.static('assets'))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/',(req,res) => {
res.render('index');
});

app.get('/game', (req,res) => {
res.render('playnow');
});

app.get('/users', (req, res) => {
    res.json(users);
    });
    
    app.get('/login', (req, res) => {
        res.render('login', { message:''});
      });
    
      app.post('/login', (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
      
        const userFound = users.find((user) => {
          return user.email == email;
        })
      
        if(!userFound) {
          console.log('not found');
          return res.render('login', {
            message: 'User not found'
          });
        }
      
        if(userFound.password != password) {
          console.log('wrong pass');
          return res.render('login', {
            message: 'Incorrect password'
          });
        }
      
        res.render('articles/create');
      });
    
    // <-----  Error   ----->
    
    app.get('/error', (req,res) =>
    { error})
    
    //Internal Server Error Handler
    app.use(function(err, req, res, next) {
        console.error(err)
        res.status(500).json( {
            status:'fail',
            errors: err.message
        })
    })
    
    //404 Handler
    app.use(function(err, req, res, next) {
        res.status(404).json( {
            status: 'fail',
            errors: 'Are you lost?'
        })
    })
    
    //index.js
    const { user_game } = require('./models')
    
    //app.use(express.json())
    
    //GET/articles/create, menampilkan form create
    

    //POST an article
app.post('/articles', (req, res) => {
  Article.create({
      title: req.body.title,
      body: req.body.body
  })
      .then(article => {
          res.send('Article berhasil dibuat')
      })
})

app.get('/articles', (req, res)=> {
    Article.findAll()
    .then(articles => {
        res.render('articles/index', {
            articles
        })
    })
})

//PUT an article plus
app.put('/articles/:id'), (req, res) => {
    Article.update({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    }, {
        where: { id: req.params.id }
    })
        .then(article => {
            res.status(200).json("Article update")
        }).catch(err => {
            res.status(422).json("Can't update article")
        })
  }

  //post plus
  app.post('/articles', (req, res) => {
    Article.create({
        title: req.body.title,
        body: req.body.body,
        approved: req.body.approved
    })
        .then(article => {
            res.status(201).json(article)
        }).catch(err => {
            res.status(422).json("Can't create article")
        })
  })
  
  //GET all articles
  app.get('/articles', (req, res) => {
    Articles.findAll()
        .then(articles => {
            res.status(200).json(articles)
        })
})

//GET article by ID
app.get('articles/:id', (req, res) => {
    Article.findOne({
        where: { id: req.params.id }
    })
        .then(article => {
            res.status(200).json(article)
        })
})
  
// <-----  Pengguna baru   ----->
//buat pengguna baru
app.get('/user_game/create', (req,res) => {
    res.render('articles/create')
  })
  app.get('/user_game', (req,res) => {
    user_game.findAll()
    .then(user_game => {
      res.render('articles/index', {
        user_game
      })
    })
  })
  
  //delete data
  app.get('/user_game/erase', (req,res) => {
    user_game.destroy({
      where: {
        username : "maria"
      }
    })
    .then (() => 
    res.send('Data pengguna sudah dihapus'),
    console.log("Data pengguna sudah dihapus"))
    
  })
  
  
  //POST user_game - add data
  app.post('/user_game', (req, res) => {
    user_game.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      approved: req.body.approved
    })
    .then(user_game => {
      res.send('Data pengguna berhasil dibuat')
    })
  })
  
  //PUT user_game - update/edit data
  app.put('/user_game/:id', (req,res) => {
    user_game.update({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      approved: req.body.approved
    }, {
      where: {id: req.params.id}
    })
    .then(user_game => {
      res.status(201).json(user_game)
    }) .catch(err => {
      res.status(422).json("Can't create data users")
    })
  })
  
    app.listen(3000, function() {
        console.log("Server Nyala")
    })
    
    // app.listen(port, () => console.log('Example app listening at http://localhost:${port}'))