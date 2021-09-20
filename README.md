Untuk menjalankan Log In menggunakan:
"username": maria_patrcy
"password": mpcy

Kendala yang saya alami :
1. Pada data ini. saya belum bisa melakukan delete. Saat menggunakan 
app.get('/user_game/erase', (req,res) => {
  user_game.destroy({
    where: {
      id:req.params.id
    }
  })
terdapar error pada id. (id is not defined) . 
Tetapi, jika saya memasukan angka id yg spesifik, ex: 3. Maka, id : 3 saja yg berhasil dihapus. 
Sedangkan, data selain id : 3 tidak terhapus. Apakah ada solusi dari masalah ini, kak?

2. Untuk user_game_biodata dan user_game_history, apakah perlu membuat file create.js & update.js dan path baru lagi ? 
seperti app.get('/user_game_biodata)
