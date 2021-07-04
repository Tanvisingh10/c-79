name_of_students_array = [];
function submit() {
    var name_1 = document.getElementById("name_of_student_1").value;
    var name_2 = document.getElementById("name_of_student_2").value;
    var name_3 = document.getElementById("name_of_student_3").value;
    var name_4 = document.getElementById("name_of_student_4").value;
    var name_5 = document.getElementById("name_of_student_5").value;

    name_of_students_array.push(name_1);
    name_of_students_array.push(name_2);
    name_of_students_array.push(name_3);
    name_of_students_array.push(name_4);
    name_of_students_array.push(name_5);

    console.log(name_of_students_array);
    document.getElementById("display_name").innerHTML = name_of_students_array;
    document.getElementById("btn_submit").style.display = "none";
    document.getElementById("btn_sort").style.display = "inline-block";
}

function sort() {
    name_of_students_array.sort();
    console.log(name_of_students_array);
    document.getElementById("display_name").innerHTML = name_of_students_array;
}
