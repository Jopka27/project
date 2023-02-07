"use strict"

  num = 50;

  (num === 50) ? console.log('OK!') : console.log('ERROR');
  
  switch(num){
        case 49:
            console.log("Error");
            break;
        case 100:   
            console.log("Error");
            break; 
        case 50:   
            console.log("OK!");
            break; 
        default:
            console.log("Not in this time!");
            break; 
  }