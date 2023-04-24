const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`

//Write this file
fs.writeFileSync(filePath,'This is async file');






// Read this file
// fs.readFile(filePath,"utf8",(err,item)=>{
    
//     console.log(item)
// });





//Update File
// fs.appendFile(filePath,'And This is another file',(err)=>{

//     if(!err) console.log('File is updated')
// });




//Rename of the file
// fs.rename(filePath,`${dirPath}/appleFile.txt`,(err)=>{
//     if(!err) console.log('File name is updated')
// })

// Delete the file
fs.unlinkSync(`${dirPath}/appleFile.txt`)