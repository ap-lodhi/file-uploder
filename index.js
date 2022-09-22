const express =require('express')

const multer = require('multer');
const path = require('path')

const app = express();
var store = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'files')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
  var upload = multer({ storage: store })



app.get('/',(req,res) => {
   res.sendFile(path.join(__dirname,'/index.html'))
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {
    res.send(`<h1 style="text-align: center;">File Uploaded</h1>`)
});
app.listen(3000, () => {
    console.log('server  is  runnig  ')
})