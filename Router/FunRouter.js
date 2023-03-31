const Liquor=require('../Database/Schema');




const Daru=async(req,res)=>{

try {
    let Alldaru=await Liquor.find();
    res.json(Alldaru);
} catch (error) {
    console.log(error);
}
    
}


const Daru1=async(req,res)=>{
    let id=req.params.id;
    console.log(id);

    try {
    let data=await Liquor.findOne({id:id});
    res.json(data);
             
    } catch (error) {
        console.log(error);
    }
}


module.exports={Daru,Daru1};