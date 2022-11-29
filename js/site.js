//Get Values from page
//starts or controller function
function getValues(){

  //get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
  
  //we need to validate our input
  //we call generateNumbers
  startValue = parseInt(startValue);
  
  endValue = parseInt(endValue);

  if(Number.isInteger(startValue) && Number.isInteger(endValue)){
  
    //we call generateNumbers
    let numbers = generateNumbers(startValue,endValue);
    //we call display numbers
    displayNumbers(numbers);

  } else{
    alert("you must enter integers");
  }

  //Generate numbers from startValue to endValue
  //Logic function(s)
  function generateNumbers(sValue, eValue){
  
    let numbers = [];

    //we want to get all numbers from start to end
    for (let index = startValue; index <= endValue; index++) {
      //this will run in a loop until index = endValue
      numbers.push(index);
    }
    return numbers;
  }

  //display the numbers and mark even numbers bold
  //display or view function
  function displayNumbers(numbers){
    let templateRows = "";
    
    for (let index = 0; index < numbers.length; index++) {
      
      let className = "even";
      let number = numbers[index];

      if(number % 2 == 0){
        className = "even";
      }
      else{
        className = "odd";
      }

      templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

  }
}