function sum(a) {
    return function(b) {
      return a + b;
    }
  }
  
  const newSum = sum(3); 
  console.log(newSum(7)); 