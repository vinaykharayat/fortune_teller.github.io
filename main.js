let uName;
let uQuestion;
document.querySelector("#continue").addEventListener("click", saveName);
document.querySelector("#tellFortune").addEventListener("click", saveQuestion);
document.querySelector("#reset").addEventListener("click", resetScreen);

function saveName(){
    uName = document.querySelector("#name").value;
    changeVisibility("#nameTaker", "none");
    changeVisibility("#questionTaker", "flex");
    document.querySelector("#userName").textContent = "Welcome! " + uName;
}

function saveQuestion(){
    uQuestion = document.querySelector("#name").value;
    changeVisibility("#questionTaker", "none");
    changeVisibility("#crystalBall", "flex");
    setTimeout(function() {
        changeVisibility("#crystalBall", "none");
        changeVisibility("#result", "flex");
      }, 2000);
    
    
    document.querySelector("#resultText").textContent = askFortune(Math.floor(Math.random() * 8));
}

function askFortune(answerNumber) {
    let answers = [
        'It is certain',
        'It is decidedly so',
        'Reply hazy try again',
        'Cannot predict now',
        'Do not count on it',
        'My sources say no',
        'Outlook not so good',
        'Signs point to yes'
    ]

    return answers[answerNumber];
}

function resetScreen(){
    console.log("reset clicked")
    changeVisibility("#crystalBall", "none");
    changeVisibility("#questionTaker", "none");
    changeVisibility("#result", "none");
    changeVisibility("#nameTaker", "flex");
}

function changeVisibility(id, value){
    document.querySelector(id).style.display = value;
}