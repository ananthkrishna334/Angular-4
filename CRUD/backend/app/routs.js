var madhu=require("./admin/user.control");
module.exports=function(app){
    app.post("/api/register",madhu.register)
    app.get("/api/search",madhu.search)
    app.post("/api/updateEmployee",madhu.put)
    app.post("/api/datewise",madhu.datewise)
    app.post("/api/deletemeathod",madhu.deletemeathod)
    
}
