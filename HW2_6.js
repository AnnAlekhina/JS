/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 — значения аргументов, operation — строка с названием операции.\
В зависимости от переданного значения выполнить одну из арифметических операций
 (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/



function mathOperation(arg1, arg2, operation) {
    return operation(arg1, arg2);
}

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


var x = Number(prompt('Введите х:'));
var y = Number(prompt('Введите y:'));
var oper = prompt('Введитите математическую операцию:\n+, -, *, /');

switch (oper) {
    case '+':
        alert(mathOperation(x, y, add));
        break;
    case '-':
        alert(mathOperation(x, y, sub));
        break;
    case '*':
        alert(mathOperation(x, y, mult));
        break;
    case '/':
        alert(mathOperation(x, y, div));
        break;
    default:
        alert('Введен некорректный оператор');
}



