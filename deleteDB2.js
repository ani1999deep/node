const dbConnect=require('./mongoDatabase')
const deleteData=async ()=>{
 
    let data=await dbConnect();
    let result=await data.deleteMany({name:'s21'})
    console.log(result);

    if(result.acknowledged){
        console.log('record is deleted')
    }
}
deleteData()