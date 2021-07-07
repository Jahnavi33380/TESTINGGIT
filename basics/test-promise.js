
function teaserReleaseSituation(status){

//create promise
let movieTeaserReleasePromise=new Promise((resolve,reject)=>{
    if(status==="all is well"){
        setTimeout(()=>{
            resolve("Teaser is out..")
        },5000);
    }
    else{
        setTimeout(()=>{
            reject("sorry...")
        },5000);
    }
})
return movieTeaserReleasePromise;
}



//consume the promise
/*
teaserReleaseSituation("all is well")
   .then(result=>console.log("result is",result))
   .catch(err=>console.log("err is",err))
   */

   teaserReleaseSituation("all is wel")
   .then(result=>{return "result is"+ result})
   .then(data=>console.log("data is",data))
   .catch(err=>console.log("err is",err))


