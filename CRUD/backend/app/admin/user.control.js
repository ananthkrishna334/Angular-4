var madhu =require("./userSchema.model");



var employee={};
employee.register=function(req,res){
    var employeedetails=new madhu(req.body);
    employeedetails.save(function(err,result){
        if(err){
            res.json(err)
            console.log("register failed");

        }else{
            console.log(result,"result");
            res.json(result);
        }
    });
}

    




        employee.search=function(req,res){
            madhu.find({},function(err,result){
                if(err){
                    res.json(err)
                    console.log("register failed");

                }else{
                    res.json(result);
                    console.log(result,"finding sucessfully");
                }
            })
        }


        employee.put=function(req,res) {

            console.log("hello",req.body)
            var obj={
                EmployeeId:req.body.EmployeeId
            }
            console.log("obj",obj)
            madhu.update({_id:req.body.id},{ $set: obj} , function (err, results) {
                if (err) {
                    res.json(err);
                    console.log("update error");
                } else {
                    console.log("updating successfully");
                    res.json(results);
                    console.log(results);
                }
        
           
        })
    }
    employee.datewise=function(req,res){
        madhu.find({ "JoiningDate": { $lt: req.body.JoiningDate } },function(err,results) {

            if (err) {
                res.json(err);
                console.log("find error");
    
            }else {
                res.json(results);
                console.log("finding sucessfully");
            }
    
    
        })
    
    }
    employee.deletemeathod=function(req,res){
        madhu.deleteOne({ "JoiningDate":{$gt:req.body.JoiningDate} },function(err,result){
            if(!err){
                res.json(result);
                console.log("delete sucessfully");

            }else{
                res.json("error");
                console.log("un cessfully");
            }
        } )
    }

        

module.exports=employee;