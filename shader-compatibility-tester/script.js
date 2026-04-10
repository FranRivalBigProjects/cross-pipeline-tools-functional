const res=document.getElementById("res");

function run(){
 let n=+nodes.value,t=+target.value;
 if(!n||!t){res.innerText="Enter values";return;}
 let limit=t==1?30:100;
 res.innerText=n>limit?"Too complex":"Compatible shader";
}

