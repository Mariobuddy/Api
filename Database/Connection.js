const mongoose=require('mongoose');

mongoose.set('strictQuery',false);



const ConnectDB=(uri)=>{
    console.log(`Database is connected`);
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
};




module.exports=ConnectDB;