function checkNumberArr(arr) {
    let even = 0;
    let odd = 0;
  
    arr.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                even++;
                console.log(item + ' - это ноль, четное число');
            } else if (item % 2 === 0) {
                even++;
                console.log(item + ' - это четное число');
            } else if (item % 2 !==0) {
                odd++;
                console.log(item + ' - это нечетное число');
            }
        } else {
            console.log(item + ' - это не число');
        }
  
    });
  
    console.log('Количество четных чисел: ', even);
    console.log('Количество нечетных чисел: ', odd);
  }
  
  checkNumberArr(['str', 0, 2, 3, 4, 5, null, NaN, 9]);