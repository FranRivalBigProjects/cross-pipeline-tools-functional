const res=document.getElementById("res");

function run(){
 let p=+poly.value,e=+engine.value;
 if(!p||!e){res.innerText="Enter values";return;}
 let limit=e==1?500000:1000000;
 res.innerText=p>limit?"Not optimized":"Compatible";
}

