//let bankBalance  = Number(prompt("enter the first bank balance"))
// let bankBalance1  = Number(prompt("enter the first bank balance"))
function output(){
var id1 = Number(document.getElementById("item1").value);
var id2 = Number(document.getElementById("item2").value);
var id3 = Number(document.getElementById("item3").value);
var id4 = Number(document.getElementById("item4").value);
var id5 = Number(document.getElementById("item5").value);
console.log(id1)
let sum;
let total;

//if(id1>200000)
let arr=[id1,id2,id3,id4,id5];
let arr2=[];
for(let i=0;i<arr.length;i++){
    sum=0;
    total=0;
    if(arr[i]>200000){
        sum=arr[i]+arr[i]*0.1;
        total=sum-sum*0.002;
        arr2.push(total);
    }
    else if(arr[i]>100000){
        sum =arr[i]+arr[i]*0.05;
        total=sum-sum*0.0005;
        arr2.push(total);
    }
    else{
        total = arr[i]+ arr[i]*0.05;
        arr2.push(total);
    }
document.getElementById("output1").innerText=arr2[0];
document.getElementById("output2").innerText=arr2[1];
document.getElementById("output3").innerText=arr2[2];
document.getElementById("output4").innerText=arr2[3];
document.getElementById("output5").innerText=arr2[4];
}
}
function abc(){
  document.getElementById("item1").value="";
  document.getElementById("item2").value = "";
  document.getElementById("item3").value="";
  document.getElementById("item4").value="";
  document.getElementById("item5").value="";
  document.getElementById("output1").innerText="";
document.getElementById("output2").innerText="";
document.getElementById("output3").innerText="";
document.getElementById("output4").innerText="";
document.getElementById("output5").innerText="";
    console.log('abc')        
}
