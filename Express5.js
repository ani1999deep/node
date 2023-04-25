const myLogger=function(req,res,next){

    console.log("Logged")
    next()
}
