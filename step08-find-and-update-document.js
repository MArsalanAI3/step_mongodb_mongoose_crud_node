var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
      console.log('mongoose open for business...');

      //Define a schema
      const studentSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      
      const result = await Student.findOne({name: "Muhammad Arsalan"});
      console.log(`Id: ${result._id} Name: ${result.name} , Age: ${result.age}`);

      result.name = "Muhammad Arsalan! MongoDB";

      const updateResult = await result.save();
      console.log("Update Result = ",updateResult);
      
    }
    catch(error) {
      console.log(error);
    }
})();