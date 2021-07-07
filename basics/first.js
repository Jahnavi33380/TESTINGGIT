const mc=require("mongodb").MongoClient;
const databaseUrl="mongodb+srv://jahnavi:helloworld0987@jahnavig.iucmg.mongodb.net/firstdb?retryWrites=true&w=majority"

let databaseObj;
mc.connect(databaseUrl,(err,client)=>{

if(err){
    console.log("err",)
}
else{
    databaseObj=client.db("jahnavi")
    console.log("connected")
}
}
)