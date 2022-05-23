name_of_the_student_array=[];
function submit(){
var display_student_array=[];
for(var p=1; p<=5; p++){
var name_of_the_student=document.getElementById("name_of_the_student_"+p).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);    
}    
console.log(name_of_the_student_array);

var length_array=name_of_the_student_array.length;
console.log(length_array);

for(var g=0;g<length_array; g++){
display_student_array.push("<h2>Name- "+name_of_the_student_array[g]+"</h2>");
console.log(display_student_array);    
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_comma=display_student_array.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_commas").innerHTML=remove_comma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
name_of_the_student_array.sort(); 
console.log(name_of_the_student_array);

var length_array=name_of_the_student_array.length;
console.log(length_array);   
var display_student_array_sorting=[];
for(var g=0;g<length_array; g++){
    display_student_array_sorting.push("<h2>Name- "+name_of_the_student_array[g]+"</h2>");
    console.log(display_student_array_sorting);    
    }
    console.log(display_student_array_sorting);
    var remove_comma=display_student_array_sorting.join(" ");
console.log(remove_comma);
document.getElementById("display_name_without_commas").innerHTML=remove_comma;

}
