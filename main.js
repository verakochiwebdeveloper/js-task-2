/* 

Задание №1. Дайте ответ, что будет в результате выполнения данных ниже примеров. С объяснением, почему это так.

"кот" > "код" 
"2" + 2 * "2" 
undefined == null 
undefined != null 
null == 0 
2 > "3" 
null - false + true 
1 / "l"
"2" * "3" 
4 + 5 + "O" 
"l" + 4 + 5 
"4" - 2 
"4" - "4x" 
“23” == 23
null == false 
" -4 "/ 0 + 1 
null + 1 
undefined + null
1 === “1”
“2” > 10
NaN == undefined

 */


/* "кот" > "код"  */

/**/ 
    const var1 = "кот",
    var2 = "код";
    /* надоело лазить по таблицам искать у какого символа какой код решил поискать выводиться ли код символа через js решение не моё */
    let str ="т";
    let asciiCode = str.charCodeAt(0);
    /* проверка на true or false самое просте до чего додумался */
    let answer = var1 > var2;
console.log(asciiCode)
console.log (answer);

/* "2" + 2 * "2" */

const var3 = "2",
    var4 = 2;
let sum1 = var4 * var3
console.log(typeof(sum1));
/* при умножении var3 преобразуеться в тип number и числа перемножаються */
let sum2 = var3 + sum1;
console.log(typeof(sum2))
/* здесь же на оборот получаеться преобразование в строку и строки складываються */
/*ответ полулучаеться */
console.log(var3 + var4 * var3)

/*незнаю как объснить эти примеры */

/*undefined == null здесь равно будет true*/
/* undefined != null здесь равно false */

