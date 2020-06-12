//Business Logic
function MrRobo(number){

  let array = [0];
  count = 0;

  while (count < number){
    count = count+1;
    array.push(count);
    console.log(array);
  }
};


//   for (let i = 0; i <= number; i++){

//     array.push(+1);
//   }
// }

  // let numbers = [];


//   if (number === "0"){
//       numbers.push("0");
//     } else if (number === "1" ){
//       numbers.push("0", "1");
//     } else if (number === "2"){
//       numbers.push("0", "1", "2");
//     } else if (number === "3"){
//       numbers.push("0", "1", "2", "3");
//     } else if (number === "4"){
//       numbers.push("0", "1", "2", "3", "4");
//     } else if (number === "5"){
//       numbers.push("0", "1", "2", "3", "4", "5");
//       } 

//   for (let i =0; i < numbers.length; i++){
//     let index = numbers.indexOf("1");
//     numbers[index] = " Beep!";
//  };
  
//   for (let i =0; i < numbers.length; i++){
//     let index = numbers.indexOf("2");
//     numbers[index] = " Boop!";
//   };

//   for (let i =0; i < numbers.length; i++){
//     let index = numbers.indexOf("3");
//     numbers[index] = " Won't you be my neighbor?";
//   };

// //   return numbers;
// }
  





//User Logic
$(document).ready(function() {
  $("form#userNumber").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const reply = MrRobo(number);
    $("#result").text(reply);
    });
  });