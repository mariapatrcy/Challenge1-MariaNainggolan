const {user_game} = require('./models')

user_game.create({
    username: 'maria',
    email: 'maria@gmail.com',
    password: 'mpcy',
    approved: true
})
.then(user_game => { 
    console.log(user_game)
})