const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');

//Multiple file Creation

// for(i=0;i<5;i++){

//     fs.writeFileSync(dirPath+"/test "+i+".txt", 'There is file creation')
// }

// Read with List
// fs.readdir(dirPath,(err,files)=>{
   
//     console.log(files)
// });


//Read with List with single file

fs.readdir(dirPath,(err,files)=>{

    files.forEach(element => {
        console.log(element);
      });
})