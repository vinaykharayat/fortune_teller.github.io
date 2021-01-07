function begin() {
    console.log("here");
    let uName = document.querySelector("#name").value;
    (uName === undefined) ?
        document.querySelector("h2").textContent = "Hello!" :
        document.querySelector("h2").textContent = "Hello! " + uName;

    let uQuestion = document.querySelector("#name").value;
    console.log(uQuestion);
    document.querySelector("#mFortune").textContent ="My fortune ball said, \"" + askFortune(Math.floor(Math.random() * 8)) + "\"";
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
document.querySelector("#continue").addEventListener("click", begin);