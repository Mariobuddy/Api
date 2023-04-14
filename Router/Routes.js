const {Daru,Daru1}=require('./FunRouter');
const router=require('express').Router();



router.route('/take').get(Daru);

router.route('/take/:id').get(Daru1);



module.exports=router;