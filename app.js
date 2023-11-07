let inp1=document.querySelector("#num");
let btn=document.querySelector("button");
let ans;
btn.addEventListener("click",function(){
    let num=inp1.value;
    let scale1=document.querySelector("#scale1");
let scale2=document.querySelector("#scale2");
let var1= scale1.value;
let var2= scale2.value;
   if(var1=="Celsius" && var2=="Fahrenheit"){
     ans=`${num*(9/5)+32} F`;
   }else if(var1=="Celsius" && var2=="Kelvin"){
    ans=`${num*1+273} K`;
  }else if(var1=="Celsius" && var2=="Celsius"){
    ans=`${num} C`;
  }else if(var1=="Fahrenheit" && var2=="Celsius"){
    ans=`${(num-32)*(5/9)} C`;
  }else if(var1=="Fahrenheit" && var2=="Kelvin"){
    ans=`${((num-32)*(5/9))+273} K`;
  }else if(var1=="Fahrenheit" && var2=="Fahrenheit"){
    ans=`${num} F`;
  }else if(var1=="Kelvin" && var2=="Celsius"){
    ans=`${(num*1)-273} C`;
  }else if(var1=="Kelvin" && var2=="Kelvin"){
    ans=`${num} K`;
  }else if(var1=="Kelvin" && var2=="Fahrenheit"){
    ans=`${(num-273)*(9/5)+32} F`;
  }
   let h1=document.querySelector("h1");
   h1.innerText=ans;
});