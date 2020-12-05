let cels = 25;
let far = 66.2;


//Перевод в другую систему расчета температуры
let celsToFar = cels*9/5 + 32;
let farToCels = (far - 32)*5/9;

console.log(`${cels}°C соответствует ${celsToFar}°F`);
console.log(`${far}°F соответствует ${farToCels}°C`);