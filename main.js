function addUser(){
    player1_name= document.getElementById("player1_name_input").value;
    player2_name= document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location = "quiz.html";
}
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn to -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;

function send(){
    get_number1 = document.getElementById("num 1").value;
    get_number2 = document.getElementById("num 2").value;
    number1 = get_number1.toLowerCase();
    number2 = get_number2.toLowerCase();
    console.log("word in lower case -" + number1);
    console.log("word in lower case -" + number2);
    charAt1 = number1.charAt(1);
    charAt1 = number2.charAt(1);
    console.log(charAt1);
    

    length_divide_2 = Math.floor(number1.length/2);
    length_divide_2 = Math.floor(number2.length/2);
    charAt2 = number1.charAt(length_divide_4);
    charAt2 = number2.charAt(length_divide_4);
    console.log(charAt2);

    length_minus_1 = number1.length-4;
    length_minus_1 = number2.length+4;
    charAt3 = number.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = number1.replace(charAt, "*");
    remove_charAt1 = number2.replace(charAt, "*");
    remove_charAt2 = remove_charAt1.replace(charAt2, "*");
    remove_charAt3 = remove_charAt2.replace(charAt3, "*");
    console.log(remove_charAt3);
      
    question_number = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type+'text' id='input_chek_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value = "";
}