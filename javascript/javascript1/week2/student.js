const class07students =[];
var add =0;
function addstudentToclass(studentName){
if(class07students.length<=5){
class07students.push(studentName);
add =class07students;
}
else if((class07students.length>=6)&&(studentName==='Margrethe II')){
    s.push(studentName);
    add= class07students;
}
else{
    add ='can not add students to class 07';
}
    }
    console.log(addstudentToclass('abc'));
    console.log(addstudentToclass('cde'));
    console.log(addstudentToclass('efg'));
    console.log(addstudentToclass('ghi'));
    console.log(addstudentToclass('ilm'));
    console.log(addstudentToclass('mno'));
console.log(addstudentToclass('Tes'));



