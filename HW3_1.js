/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/
var listNum = [];
n = 0;
while (n <= 100) {
    d = 2;
    while (d * d <= n && n % d != 0) {
        d += 1;
    }
    if (d * d > n) {
        listNum.push(n);
    }
    n += 1;

}
alert(listNum);



