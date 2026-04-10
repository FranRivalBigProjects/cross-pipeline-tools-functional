const res=document.getElementById("res");

function run(){
 let s=+size.value,f=+format.value;
 if(!s||!f){res.innerText="Enter values";return;}
 let factor=f==1?1.2:0.8;
 let newSize=s*factor;
 res.innerText=`Estimated converted size: ${newSize.toFixed(2)} MB`;
}

