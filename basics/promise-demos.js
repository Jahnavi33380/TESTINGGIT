
let status=true;
let myPromise=new Promise((resolve,reject)=>{

    if(status===true)
     setTimeout(()=>{
        resolve("Promise is resolved successfully")
    },5000);
    else{
        reject("promise is failed...")
    }

})


//consume the promise

myPromise
    .then((data)=>{
    console.log(data)
   })
   .catch(err=>{
       console.log("err is",err)

   })

console.log("outside of promise")
