let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

    function updatedCalulation(value){
      if (value === '=' ){
        calculation = eval(calculation);
      }else if (value === 'C'){
        calculation = '';
      }else if (value === '%'){
        calculation *= 0.01 ;
      } else{
        calculation += value;
      }
      localStorage.setItem('calculation', JSON.stringify(calculation));

      console.log(calculation);
      document.querySelector('.calculation-space').innerHTML = calculation
    }