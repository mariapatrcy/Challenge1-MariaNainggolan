const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const users = []

const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({
    extended:false
}))
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(express.static('assets'))

app.get('/',(req,res) => 
res.sendFile(( path.join(
    __dirname, './assets/views/index.html') )));

app.get('/game', (req,res) =>
res.sendFile(( path.join(
    __dirname, './assets/views/playnow.html') )));

app.get('/register', (req,res) => {
    // res.render('/register')
    res.sendFile(( path.join(
        __dirname, './assets/views/login.html') ))
    });

app.post('/register', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
});


app.get('/users', getUser);

function getUser(req, res) {
    res.json({
        jumlahUser : users.length,
        data:users
    })
};
app.get('/login', getLogin);
// function getLogin (req,res) {
//     const inputUsername = req.body.username;
//     const inputPassword = req.body.password;

//     if (inputUsername == users.username && inputPassword == users.password) {
//         res.status(201).json(
//             {
//                 status: "success"}
//             );
//     } else {
//         res.status(201).json(
//             {
//                 status: "failed"
//             });
//     };
// };

function getLogin(req, res) {
    res.json({
        jumlahUser : users.length,
        data:users
    })
};

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

app.listen(3000, function() {
    console.log("Server Nyala")
})
