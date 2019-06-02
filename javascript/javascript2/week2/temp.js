console.log('weather')
function weatherClothes(temprature){
    let clothes ='';

if(temprature>= -5&& temprature<=10){
clothes=('you have to wear ConstantSourceNode, scarf and hat');
} else if(temprature>10 && temprature<=17){
    clothes='you have to wear jacket and sweater'
}else if ('temprature>17 && temprture<=30'){
    clothes='you have to wear T -shirt ,short, sunglasses and flip flops';
}else{
    console.warn('Stay home ! else you will be sick')
} 
return clothes
} console.log(weatherClothes(100));