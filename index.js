//learning Mocha Testing suit, using TDD, BDD, ATDD, ... 
// 6 MAY 2024
// AMIR SAMIMI 


// //sample for uploading file
// document.querySelector("input").addEventListener("change",(e)=>{
//    let uploadedFile = e.target.files[0] 
//    const reader = new FileReader();
//    reader.onload = function(event) {
//        const contents = event.target.result;
//        document.querySelector("p").innerText = contents;
//    };
//    reader.readAsText(uploadedFile);
// })

// Define a rooster
let Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour;
  };
}

const caseToggle = (input) => {

  const UpperPattern = /[A-Z]/;
  const LowerPattern = /[a-z]/;

if(UpperPattern.test(input)){
  return input.toLowerCase()
}else if(LowerPattern.test(input)) {
  return input.toUpperCase()
}else{
  return input.toLowerCase()
}



}

module.exports = {
  Rooster,
  caseToggle
}

