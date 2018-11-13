var mongoose=require('mongoose')
Schema=mongoose.Schema
var employeeSchema=new Schema({
    FirstName:{type:String},
    SecondName:{type:String},
    DateofBirth:{type:Date},
    EmployeeId:{type:Number},
    JoiningDate:{type:Date}
    
});

module.exports=mongoose.model("employee",employeeSchema)
