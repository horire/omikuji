const drowButton = document.querySelector('#drawButton')
const resultDisplay = document.querySelector('#resultDisplay')

drowButton.addEventListener('click', () => {

    const randomNumber = Math.random();
    document.body.classList.remove('red', 'blue', 'green');
    

    if (randomNumber < 0.3) {
        resultDisplay.textContent = '大吉'
        document.body.classList.add('red');
    } else if (randomNumber < 0.6) {
        resultDisplay.textContent = '中吉'
        document.body.classList.add('blue');
    } else if (randomNumber < 0.7) {
        resultDisplay.textContent = '九産大へようこそ'
        document.body.insertAdjacentHTML('beforeend', '<a id="link" href="https://www.kyusan-u.ac.jp/">九産大</a>');
        document.body.classList.add('blue');
    }
    else {
        resultDisplay.textContent = '吉'
        document.body.classList.add('green');
    }

    // resultDisplay.textContent = '大吉'


    // console.log(randomNumber); 
})