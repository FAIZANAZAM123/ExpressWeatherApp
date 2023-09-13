const submitbtn=document.getElementById('submitting');
const datainput=document.getElementById('datainput');
const city=document.getElementById('city-name');
const temperaturee=document.getElementById('temperature');
const datee=document.getElementById('date');
const dayee=document.getElementById('day');
let cityname='';
const getdata= async(event)=>{
const date=new Date();

console.log(date.getDay());


cityname=datainput.value;
if(cityname==='')
{
    city.innerText='Enter the corect value'
}
else{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    try{
let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=41e79f1c6750dcfbd0a3122af4668dde`
const response=await fetch(url);
const finaldata=await response.json();

city.innerText=finaldata.name  ;
temperaturee.innerText = (finaldata.main.temp - 273.15).toFixed(1)+'°C';
const d = new Date();
const datetoday = d.getDate();
const month = d.getMonth() + 1;
const yearnow = d.getFullYear();
console.log(`${datetoday}/${month}/${yearnow}`);
datee.innerText = `${datetoday}/${month}/${yearnow}`;


dayee.innerText=weekday[date.getDay()];;
console.log();


 }
    catch(err){
console.log(err);
    }

}
event.preventDefault();
}


submitbtn.addEventListener('click',getdata);
console.log(cityname);


