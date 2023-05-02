const dbConnect=require('./mongoDatabase')
const deleteData=async()=>{
 
    let data=await dbConnect();
    let result=await data.deleteMany({ name: "s30"})
    console.log(result)
}
deleteData();