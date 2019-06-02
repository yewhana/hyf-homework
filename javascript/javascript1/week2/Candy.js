var boughtCandyPrice =[];
let price=0;
function addCandy(candtype,weight){
    if(candytype==='sweet'){
        price=weight*0.5;
        boughtCandyPrice.push(price);
    }else if(candytype==='chocolate'){
        price=weight*0.7;
        boughtCandyPrice.push(price);

    }else if(candytype==='toffee'){
    price=weight*1.1;
    boughtCandyPrice.push(price);
}else if(candtype==='chewing gum'){
    price=weight*0.03;
    boughtCandyPrice.push(price);
}else{
    price='wait and see';
}
console.log(boughtCandyPrice);
return price;
}