/*
Реализовать четыре основные арифметические операции в виде функций с 
двумя параметрами. Обязательно использовать оператор return.
*/
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b != 0) {
        return a / b;
    }
    else {
        return 'На ноль делить нельзя';
    }

}

x = Number(prompt('Введите х:'));
y = Number(prompt('Введите у: '));
alert('Результат сложения: ' + add(x, y));
alert('Результат  вычитания: ' + sub(x, y));
alert('Результат умножения: ' + mult(x, y));
alert('Результат деления: ' + div(x, y));
