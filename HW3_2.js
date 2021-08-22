/*
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
Организовать такой массив для хранения товаров в корзине;
Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

*/

function countBasketPrice1(basket) {
    var price1 = 0;

    for (var el of basket) {

        price1 += el;

    }
    return price1;
}


var basket = [1, 7, 3, 5, 8];
var price2 = basket.reduce(function (acc, elem) {
    return acc + elem;
}, 0);


alert(`Результат работы функции: ${countBasketPrice1(basket)}`);
alert(`Результат работы reduce: ${price2}`)

