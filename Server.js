const dotenv=require('dotenv');

dotenv.config();

const path=require('path');

const express=require('express');

const app=express();

const multer=require('multer');

const bodyparser=require('body-parser');

const cors=require('cors');

const ConnectDB=require('./Database/Connection');

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

const router=require('./Router/Routes');

const Liquor=require('./Database/Schema');


let Darudata=require('./Router/Daru.json');



const storage=multer.diskStorage({
    destination:'./upload',
    filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
  });
  
  
  const upload=multer({
    storage:storage
  });
  
  app.use('/profile',express.static('./upload'));
  
  app.post('/upload',upload.single('all'),(req,res)=>{
    res.json({
      sucess:1,
      profile_url:`http://localhost:5000/profile/${req.file.filename}`
    })
  });
  
  
  
  app.use(cors({
      origin:'http://localhost:5000'
    }));
    
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });




app.use(`/api/products`,router);





const Start=async()=>{


    try {
        
       await ConnectDB(process.env.Address);
       await Liquor.deleteMany();
       await Liquor.create(Darudata);

        app.listen(process.env.PORT,()=>{
            console.log(`Server is started in port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
  


}

Start();