player1Name= localStorage.getItem("player1_name");
player2Name= localStorage.getItem("player2_name");
player1Score= 0;
player2Score= 0;

document.getElementById("player1_name").innerHTML= player1Name + ":";
document.getElementById("player2_name").innerHTML= player2Name + ":";

document.getElementById("player1_score").innerHTML= player1Score;
document.getElementById("player2_score").innerHTML= player2Score;

document.getElementById("question_player_turn").innerHTML= player1Name;
document.getElementById("answer_player_turn").innerHTML= player2Name;
function send(){
    number1= document.getElementById("Number1").value;
    number2= document.getElementById("Number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box= "<br> Answer: <input type='text' id='input_check_box'>"
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_number+ input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("Number1").value= "";
    document.getElementById("Number2").value= "";
}