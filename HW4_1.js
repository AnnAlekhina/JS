function makeObjectNumb(numb) {
    var units = 0;
    var dozens = 0;
    var hundreds = 0;
    len = numb.length - 1;

    if (len === 2) {
        units = numb[2];
        dozens = numb[1];
        hundreds = numb[0];
    }
    else if (len === 1) {
        units = numb[1];
        dozens = numb[0];

    }
    else if (len === 0)
        units = numb[0];

    else
        return 'Введено некорректное число';

    var objectNumb = {
        units: units,
        dozens: dozens,
        hundreds: hundreds
    }
    return objectNumb


}

console.log(makeObjectNumb('123'));





