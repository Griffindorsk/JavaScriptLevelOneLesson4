// Задание #1
document.write('<h3>Задание #1</h3>');
document.write('<p>Преобразование числа в объект</p><br>');
console.log('Задание #1')
alert('Задание #1');

function checkNumber() {
    var attempts = 3;
    for (i = 1; i <= attempts; ++i) {
        var oneNumber = prompt('задайте число в диапазоне от 0 до 999');
        if (!isNaN(oneNumber)) {
            if (oneNumber >= 0 && oneNumber <= 999) {
                return oneNumber;
            }
            else {
                alert('Необходимо задать число в диапазоне от 0 до 999. Кол-во оставшихся попыток: ' + (attempts - i));
            }
        }
        else {
            alert('Необходимо задать число. Кол-во оставшихся попыток: ' + (attempts - i));
        }
    }
}

function numberToObject() {
    var inputResult = checkNumber();
    var a;
    if (inputResult != undefined) {
        if ((inputResult / 100) >= 1) {
            inputResult = String(inputResult);
            a = {
                'единицы': inputResult.charAt(2),
                'десятки': inputResult.charAt(1),
                'сотни': inputResult.charAt(0)
            }
        }
        else if ((inputResult / 10) >= 1) {
            inputResult = String(inputResult);
            a = {
                'единицы': inputResult.charAt(1),
                'десятки': inputResult.charAt(0)
            }
        }
        else {
            inputResult = String(inputResult);
            a = {
                'единицы': inputResult.charAt(0)
            }
        }
    }
    else {
        a = {};
        console.log('К сожалению, число в требуемом диапазоне не было задано. До новых встреч!');
    }
    console.log(a);
    return a;
}
numberToObject();