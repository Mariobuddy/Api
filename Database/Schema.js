const mongoose=require('mongoose');

mongoose.set('strictQuery',false);



const Schema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true
    },

    company:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    featured:{
        type:Boolean,
    },
    stock:{
        type:Number,
    },
    colors:[
        {type:String}
    ],
    images:[
        {
         
            url:String,
            id:String
          
        }
    ],
    reviews:{
        type:Number,
    },
    id:{
        type:String,
        required:true
    },
    stars:{
        type:Number,
    }

    
    
});


const Liquor=new mongoose.model('Liquor',Schema);


module.exports=Liquor;