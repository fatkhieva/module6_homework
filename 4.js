function numbersInterval(a, b) {
    let i = a;
    let timerId = setInterval(function() {
      console.log(i);
      if (i == b) clearInterval(timerId);
      i++;
    }, 1000);
  }
  
  
  numbersInterval(1, 7);