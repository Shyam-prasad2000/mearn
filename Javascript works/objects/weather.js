var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},


]
var weather_data={};
for(let data of dataset){
    let disName=data.district;
    let curTemp=data.temparature;
    if(disName in weather_data){
        let oldTemp=weather_data[disName];
        if(curTemp>oldTemp){
            weather_data[disName]=curTemp;
        }
    }
    else{
        weather_data[disName]=curTemp;
    }
}
console.log(weather_data);
