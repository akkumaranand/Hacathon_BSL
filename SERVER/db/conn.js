const mongoose = require("mongoose");
const url = 'mongodb+srv://anandkeshri123ak:APlnlec0oTxMScOt@shiva.tng6yox.mongodb.net/Authuser?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongo success')
}).catch((e)=>{
    console.log(e)
})