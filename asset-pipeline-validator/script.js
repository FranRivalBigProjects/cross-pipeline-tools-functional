const res=document.getElementById("res");

function run(){
 let a=+assets.value,e=+errors.value;
 if(!a||e===undefined){res.innerText="Enter values";return;}
 res.innerText=e>0?"Pipeline issues":"Pipeline valid";
}

