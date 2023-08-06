const mongoose = require('mongoose') ;

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect("mongodb+srv://adminharshit:harshitadmin@cluster0.pumb8ej.mongodb.net/mycontacts-backend?retryWrites=true&w=majority ",{
            useNewUrlParser: true,
            useUnifiedTopology: true
           }) ;
           console.log("Connection Established", connect.connection.host, connect.connection.name) ;
    }
    catch(err){
        console.log(err) ;
        process.exit(1) ;
    }
}

module.exports = connectDB ;