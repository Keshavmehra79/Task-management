
let pass="";

const randomPassword=()=>{
    let str="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";

   let strLength=str.length;
   for (var i=0; i<=7; i++){
    let randno = Math.floor(Math.random()*strLength);
     pass=pass+str.charAt(randno);
   }

   return pass;
}

module.exports={
 randomPassword
} 