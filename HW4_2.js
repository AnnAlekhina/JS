function countBasketPrice(basket) {
    var summ = 0
    for (var el of basket) {
        summ += el.cost * el.amount;
    }
    return summ;
}

class product {
    constructor(name, cost, amount) {
        this.name = name;
        this.cost = cost;
        this.amount = amount;
    }

}

var p1 = new product('a', 500, 1);
var p2 = new product('b', 200, 2);
var p3 = new product('c', 100, 3);

basket = [p1, p2, p3];

console.log(countBasketPrice(basket))
