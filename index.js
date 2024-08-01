let computerChoice;
let result;
let scoreStr=localStorage.getItem('score');
let score =JSON.parse(scoreStr)||{
    user: 0,
    computer: 0,
    tie: 0,
};
score.totalScore= function () {
        return `Total Win: ${score.user}, Lost: ${score.computer}, Tie: ${score.tie}`
};
document.querySelector(".total-score").innerText = score.totalScore();
function bat() {
   let userChoice = "User Choose to Bat.";
    if (systemChoice() == "Bat") {
        result = "It's a tie.";
        score.tie++;
    }
    else if (systemChoice() == "Ball") {
        result = "User Won The Match.";
        score.user++;
    }
    else if (systemChoice() == "Stumps") {
        result = "Computer Won The Match."
        score.computer++;
    }
    displayScore(userChoice, computerChoice, result);
}
function ball() {
   let userChoice = "User Choose to Ball.";
    if (systemChoice() == "Bat") {
        result = "Computer Won The Match.";
        score.computer++;
    }
    else if (systemChoice() == "Ball") {
        result = "It's a Tie.";
        score.tie++;
    }
    else if (systemChoice() == "Stumps") {
        result = "User Won The Match."
        score.user++;
    }
    displayScore(userChoice, computerChoice, result);
}
function stump() {
    let userChoice = "User Choose Stumps.";
    if (systemChoice() == "Bat") {
        result = "User Won The Match.";
        score.user++;
    }
    else if (systemChoice() == "Ball") {
        result = "Computer Won The Match.";
        score.computer++;
    }
    else if (systemChoice() == "Stumps") {
        result = "It's a tie.";
        score.tie++;
    }
    displayScore(userChoice, computerChoice, result);
}
function reset(){
    score.user=score.computer=score.tie=0;
    localStorage.setItem('score',JSON.stringify(score));
    displayScore('','','');
}
function displayScore(userChoice, computerChoice, result) {
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector(".user-choice").innerText = userChoice;
    document.querySelector(".computer-choice").innerText = computerChoice;
    document.querySelector(".result").innerText = result;
    document.querySelector(".total-score").innerText = score.totalScore();
}
function systemChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber == 1) {
        computerChoice = "Computer Choose to Bat.";
        return "Bat"
    }
    else if (randomNumber == 2) {
        computerChoice = "Computer Choose to Ball.";
        return "Ball"
    }
    else if (randomNumber == 3) {
        computerChoice = "Computer Choose to Stumps.";
        return "Stumps"
    }
}