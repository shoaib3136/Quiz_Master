
function calculateScore(checkAnswersCallback) {
    const answers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value
    };
    
    const score = checkAnswersCallback(answers);
    document.getElementById('scoreDisplay').textContent = `Score: ${score}/3`;
}


function strictScoring(answers) {
    let score = 0;
    if (answers.q1.toLowerCase() === 'class') score++;
    if (answers.q2.toLowerCase() === 'object') score++;
    if (answers.q3.toLowerCase() === 'java virtual machine') score++;
    return score;
}


function lenientScoring(answers) {
    let score = 0;
    if (answers.q1.toLowerCase().includes('class')) score++;
    if (answers.q2.toLowerCase().includes('object')) score++;
    if (answers.q3.toLowerCase().includes('java virtual machine')) score++;
    return score;
}


document.getElementById('checkBtn').addEventListener('click', function() {
    calculateScore(strictScoring);
});