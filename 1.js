const name = "Andrey";
let age = 20;
console.log(name);
console.log(age);
age = 23;
console.log(name+' ' +age);
// создание переменной name и присваивание ей значения 
// создание пременной age  и присваивание ей значения 
// вывод значений 
// общий вывод значений
/*создание переменной name и присваивание ей значения 
 создание пременной age  и присваивание ей значения 
 вывод значений 
 общий вывод значений*/
  let bl = 1e10;
  console.log(bl);
  
  let b = 1e-5;
  console.log(b);
 
  let nu_st =parseInt(15);
  console.log(nu_st);
  
  let num = 0.3;
  let num1 = 0.6;
  console.log (Math.floor(num));
  console.log (Math.round(num));
  console.log(Math.ceil(num));
  console.log (Math.floor(num1));
  console.log (Math.round(num1));
  console.log(Math.ceil(num1));

  console.log(isNaN(b) === isNaN(bl));

  let str = "JAVASCRIPT";
  
  console.log (str.toLowerCase());
  
  str = str[0].toUpperCase() + str.slice(1).toLowerCase();
  console.log(str)

function truncate(str, maxlenght){
    if (str.length > maxlenght){
        return str.slice(0, maxlenght ) + "...";
    };
    return str
};

 console.log(truncate ("JAVASCRIPT", 6));



