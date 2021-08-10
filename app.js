const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetbutton = document.querySelector('#reset');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#scoretowin');
let winningScore = 3;
let p1 = 0;
let p2 = 0;
let isGameOver = false;
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1 += 1;
        if (p1 === winningScore) {
            isGameOver = true;
            p1Display.classList.add("has-text-success");
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.innerText = p1;

    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2 += 1;
        if (p2 === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.innerText = p2;

    }
})
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})
resetbutton.addEventListener('click', reset);
function reset() {
    p1 = 0;
    p2 = 0;
    p1Display.innerText = p1;
    p2Display.innerText = p2;
    p1Display.classList.remove('has-text-danger', 'has-text-success');
    p2Display.classList.remove('has-text-danger', 'has-text-success');
    isGameOver = false;
    p1Button.disabled = false;
    p2Button.disabled = false;
}
