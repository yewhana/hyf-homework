console.log("Flight booking full name function")
function getFullnames(firstname,surname,useFormalName){
    var fullname1 =firstname;
    var fullname2 =surname;
    var formalName = " lord " + " " + fullname1 +" " + fullname2;

if(useFormalName) {
   return formalName;
}
else{
    return fullname1 +"" + fullname2;
}
}
console.log(getFullnames("Tesfay","Brhane",true));