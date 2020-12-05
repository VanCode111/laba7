let year = prompt("Введите год");

//Проверка високосный ли год
let yearIsVis = year%4 == 0?year%100 != 0?true:false:false;

//Выводим результат
alert(yearIsVis);