Cara menjalankan pada challenge ini :
1. Klik menu Log in, kemudian isi data dengan username :  maria_patrcy dan password :  mpcy. 
2. Kemudian,. user akan directed ke web yang berisikan 4 data, seperti Nama, username, email, dan password.  
3. Setelah submit, 4 data tersebut akan disimpan pada database dan akan tertera di website selanjutnya di path /user_game.
4. User dapat menambah, update, dan hapus data yang sudah diisi. 
5. Untuk menambah, user akan dibawa ke path /user_game/create.
6. Untuk update data, user bisa mengubahnya dengan menggunakan postman dengan path /user_game/update:id (tentukan id yg ingin diubah). 
7. Untuk delete, user bisa dapat langsung menghapus datanya. Path yg digunakan adalah /user_game/erase:id . 
8. Untuk menjalan user_game_biodata, 
dapat dilakukan dengan mengubah user_id, dan nama pada file index.js. Kemudian jalan kan dengan node index.js, maka data tersebut akan masuk ke database menggunakan SELECT * FROM user_game_biodata;
9. Untuk menjalan user_game_history, 
dapat dilakukan dengan mengubah user_id, dan result pada file index.js. Kemudian jalan kan dengan node index.js, maka data tersebut akan masuk ke database menggunakan SELECT * FROM user_game_histories;
