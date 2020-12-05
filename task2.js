let topSide = 10;
let rightSide = 5;

//Вычисляем периметр прямоугольника
let perimeterOfRectangle = (topSide + rightSide)*2;

//Вычисляем площадь прямоугольника
let areaOfRectangle = topSide*rightSide;

//Вычисляем отношение периментра к площади
let perimeterToAreaRatio = perimeterOfRectangle/areaOfRectangle;

//Выводим вычисленные значения в консоль
console.log(`Стороны прямоугольника ${topSide} ${rightSide}`);
console.log(`Периметр прямоугольника ${perimeterOfRectangle}`);
console.log(`Площадь прямоугольника ${areaOfRectangle}`);
console.log(`Отношние периметра к площади ${perimeterToAreaRatio}`);