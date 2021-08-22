/* Сравнить null и 0. Объяснить результат.*/
alert(null == 0); //false
alert(null > 0);//false
alert(null >= 0); //true, потому что js проверяет, null < 0 ? если нет,
// то результат этого выражения true