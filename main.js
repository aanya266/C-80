name_of_student_array = []
display_student_array = []
function submit() {
    for (i=1; i<=4; i++){
        var name_of_student = document.getElementById("name_of_the_student_"+i).value
        console.log(name_of_student);
        name_of_student_array.push(name_of_student)
    }
    var length_of_name = name_of_student_array.length 
    for (i=0; i<length_of_name; i++ ){
        display_student_array.push("<h4> Name -" + name_of_student_array [i] + " </h4>")
    }
    document.getElementById("display_name_with_commas").innerHTML= display_student_array;
    var remove_commas = display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";
}
function sorting() {
    name_of_student_array.sort();
    var display_student_array_sorting = [];
    var lenght_of_array = name_of_student_array.length
    for (i=0; i<lenght_of_array; i++) {
        display_student_array_sorting.push("<h4> Name -" + name_of_student_array[i] + "</h4>")
    }
    var remove_commas = display_student_array_sorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
}

