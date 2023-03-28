function isNumberPrime(n) {
    if (n < 2 || n > 1000) { 
      console.log("Данные неверны");
    } else if (n === 2) {  
      console.log("Это простое число");
    } else if (n % 2 === 0) {  
      console.log("Это непростое число");
    } else {
      for (let i = 3; i <= Math.sqrt(n); i += 2) {  
        if (n % i === 0) {
          console.log("Это непростое число");
          return;
        }
      }
      console.log("Это простое число");
    }
  }


  console.log(isNumberPrime(19));


