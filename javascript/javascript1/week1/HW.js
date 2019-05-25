var yearOfBirth = 1987;
var yearFuture = 2027;
var age =yearFuture-yearOfBirth;
console.log(typeof yearOfBirth);
console.log(typeof yearFuture);
console.log(' you will be ' + age +' years old in ' + yearFuture + '.');


var dogYearOfBirth;
var dogYearOfFuture =2027;
const dogYear =10;
var shouldShowResultInDogyears;
function dogAge(birth){
    dogYearOfBirth=birth;
shouldShowResultInDogyears = dogYearOfFuture -dogYearOfBirth;
if(shouldShowResultInDogyears===dogYear){
    console.log('your dog will be '+ 7*dogYear +'human years old in '+shouldShowResultInDogyears+'. ');
}
else{
    console.log('your dog will be '+ 7*dogYear +'human years old in '+ dogYearFuture);
}
return shouldShowResultInDogyears;
}
console.log(dogAge(2017));


var volumeInm2,gardenSizem2,housePrice;
function costhousey(w,h,l,gs){
    volumeInm2=w*h*l;
    gardenSizem2=gs;
    housePrice=volumeInm2*2.5*1000+gardenSizem2*300;
    if(housePrice<2500000){
        if(housePrice<1000000){
            console.log('Julia paid too much');
        }
        else{
            console.log('Julia paid too little');
        }
        console.log('Peter  paid too much ');
        
    }else{
        console.log('Peter paid too little');
    }
    return housePrice;
}
console.log(costhousey(5,11,8,70));


//step 4
var firsWords=['Address','Air','Arm','Quarry','pound','Ream','Tender','Well','Current','Bright'];
var secondWords=['Location','Oxygen','Body part','Slowly','Weight','Paper','Gentle','Health','Flow','Intelligent'];
var randomIndex=Math.floor(Math.random()*10)+0;
var startUpName=firsWords[randomIndex]+ ' '+ secondWords[randomIndex];
console.log(startUpName,' numberOfCharacters= '+startUpName.length);