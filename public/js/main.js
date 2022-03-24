const submitbtn = document.getElementById("submitButton");
const cityname  = document.getElementById("citynamed");
const tempstatus = document.getElementById("temp_status");
const temperature =  document.getElementById("temp");

const getInfo = (event)=>{
    event.preventDefault();
    let cityval = cityname.value;
     if(cityval==""){
        cityname.innerText="Please neter the name of city"
    }
    else{
       try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&uits=metric&appid=3d5794433f5e8c1a6228aa51b7ad3b84`;
        const response = await fetch(url);
        const tdata = await response.json;
        const arrdata = [tdata];
        temperature.innerText = arrdata[0].main.temp;
        tempstatus.innerText = arrdata[0].weather[0].main;
    }
    catch{
        cityname.innerText="Please enter city name properly"
    }
   }
}
submitbtn.addEventListener('click',getInfo);