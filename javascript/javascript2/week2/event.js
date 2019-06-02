function getEventWeekDay(day){
var result =null;
    var d=new Date("2019-05-31");
    var today="friday";
    console.log(d);
    var arr=["saturday","sunday","monday","tuesday","wednesday","thursday"];
    if (day%7===1){
        return arr[0];
    } else if(day%7===2){
        return arr[1];
    }else if(day%7===3){
return arr[2];
    }else if(day%7===4){
        return arr[3];
    } else if(day%7===5){
    return arr[4];
    } else if(day%7===6){
return arr[5];
    } else{
result =today;
    }          
    return result;

    }


console.log(getEventWeekDay(9));