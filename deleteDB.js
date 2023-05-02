const dbConnect=require('./mongoDatabase')
const deleteData=async ()=>{
 
    let data=await dbConnect();
    let result=await data.deleteOne({name:'m 31'})
    console.log(result);

    if(result.acknowledged){
        console.log('record is deleted')
    }
}
deleteData()