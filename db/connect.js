const mongoose = require('mongoose')

const connectionString =
""
// Connect to your Atlas cluster


const connectDb=(url)=>{
return mongoose
.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,})


}
module.exports=connectDb




    // .then(() => console.log('CONNECTED TO THE DB...'))
// . catch((err) => console.log(err))
