let fs=require('fs');
var path = require('path');

let inputarr=process.argv.slice(2); // because in 0,1 position we get node ,path
let optionarr=[];
let patharr=[];
for(let i=0;i<inputarr.length;i++){
    let fchar=inputarr[i].charAt(0);
    if(fchar=="-"){
optionarr.push(inputarr[i]);
    }else{
patharr.push(inputarr[i]);
    }
}
for(let i=0;i<optionarr.length;i++){
    if(optionarr[i]=="-n" && optionarr[i+1]=="-b" || optionarr[i]=="-b" && optionarr[i+1]=="-n"){
        optionarr.splice(i+1,1);
    }
}
// console.log(optionarr);
// console.log(optionarr);
// console.log(patharr);

for(let i=0;i<patharr.length;i++){
    let ans=fs.existsSync(patharr[i]);
    // console.log(ans);
    if(ans==false){
        console.log("file does not exist");
    return;
    }
}
let con="";
for(let i=0;i<patharr.length;i++){
con=con+fs.readFileSync(patharr[i])+"\r\n";
}
let contarr=con.split("\r\n");
// console.log(contarr);
let ispresent=optionarr.includes("-s");
if(ispresent){
    // console.log("hi");
    for(let i=1;i<contarr.length;i++){
       
         if(contarr[i]=="" && contarr[i-1]==""){
            contarr[i]=null;
        }else if(contarr[i]=="" && contarr[i-1]==null){
            contarr[i]=null;
        }
    }
    let temparr=[];
    for(let i=0;i<contarr.length;i++)
    {
        if(contarr[i]!=null){
            temparr.push(contarr[i]);
            // console.log(temparr);
        }
    }
    // console.log(temparr);
    contarr=temparr;
}
let isnpresent=optionarr.includes("-n");
if(isnpresent){
    let c=1;
    let s1="";
    for(let i=0;i<contarr.length;i++){
        s1=s1+c+contarr[i]+"*";
        c++;
    }
    // console.log(s1);
let temp=s1.split("*");
// console.log(temp);
let temparr=[];
for(let i=0;i<temp.length;i++)
{
    if(temp[i]!=null){
        temparr.push(temp[i]);
    }
}
contarr=temparr;
}
let isbpresent=optionarr.includes("-b");
if(isbpresent){
    let c=1;
    let s1="";
    // console.log(contarr);
    for(let i=0;i<contarr.length;i++){
      if(contarr[i]!=""){
        s1=s1+c+contarr[i]+"*";
        c++;
      }else{
          s1=s1+contarr[i]+"*";
      }
    }
    // console.log(s1);
   
let temp=s1.split("*");
// console.log(temp);
let temparr=[];
for(let i=0;i<temp.length;i++)
{
    if(temp[i]!=null){
        temparr.push(temp[i]);
    }
}
contarr=temparr;
}

contarr=contarr.join("\n");
console.log(contarr);


// console.log(con);

