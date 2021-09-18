const {Article} = require('./models')
const query ={
    where: {id:1}
}

Article.update({
    approved: false
}, query)
.then(() => {
    console.log("Data berhasil diupdate")
    process.exit()
})
.catch(err=> {
    console.error("Gagal mengupdate data!")
})