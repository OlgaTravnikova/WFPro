let mysteryNumber;
let tries = 3;
let getResult;
let game;

const gameBotFunction = function () {
    
    function randomGenerate(min, max) {
        mysteryNumber = min + Math.floor(Math.random() * (max - min +1));
        return mysteryNumber;
    }

    //проверка на число
    function checkIsNumber(answerNum) {
        return !isNaN(parseFloat(answerNum)) && isFinite(answerNum);
    }

    function guessNumber(tries) {

        randomGenerate(1, 100);
        alert(mysteryNumber);

        //есть ли попытки
        while (tries > 0) {
            getResult = prompt('угадайте число от 1 до 100');

            tries--;
    
            //нажата отмена
            if (getResult === null) {
                alert('Вы завершили игру');
                return;
            }
    
            //проверка на число
            if (!checkIsNumber(getResult)) {
                alert('Введите числовое значение!');
                continue;
            }
    
            getResult = parseInt(getResult.trim(), 10);
    
            if (getResult === mysteryNumber) {
                game = confirm('Верно! Хотите сыграть еще?');
                if (game) {
                    tries = 3;
                    mysteryNumber = randomGenerate(1, 100);
                    continue;
                } else {
                    tries = 0;
                }
            } else if (getResult > mysteryNumber) {
                alert('Загаданное число больше. У вас осталось ' + tries + ' попыток');
            } else if (getResult < mysteryNumber) {
                alert('Загаданное число меньше. У вас осталось ' + tries + ' попыток');
            }
        }
    
        game = confirm('попытки закончились. может, хотите попробовать снова?');
        if (game) {
            guessNumber(3);
        } else {
            alert('Вы завершили игру');
        }
    }

    guessNumber(tries);
}

gameBotFunction();