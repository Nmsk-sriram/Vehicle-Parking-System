const mongoose=require("mongoose");

const dbconnect=async()=>{
    try{

       const co=await mongoose.connect('mongodb+srv://sriramnamburi56:Sriram@cluster0.l2bzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
       console.log("The database is connected successfully  ",co.connection.host,co.connection.name );
    }
    catch(err)
    {
        console.log(err);
        throw new Error("There is error in connecting");


    }


}
module.exports=dbconnect;