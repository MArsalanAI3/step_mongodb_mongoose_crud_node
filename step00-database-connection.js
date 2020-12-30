var mongoose=require('mongoose')
var dotenv=require('dotenv');
dotenv.config();


(async()=>{
try{
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{useNewUrlParser: true, useUnifiedTopology:true})
    console.log("Mongoose OPen For A Business....");
}
catch(error){
    console.log("Mongoose Connection Error=>",error);
}
})();
