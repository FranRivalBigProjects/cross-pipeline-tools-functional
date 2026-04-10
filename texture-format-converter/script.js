const res=document.getElementById("res");

function run(){
 let s=+size.value,f=+format.value;
 if(!s||!f){res.innerText="Enter values";return;}
 let newSize=f==1?s*1.5:s*0.6;
 res.innerText=`Converted size: ${newSize.toFixed(2)} MB`;
}

