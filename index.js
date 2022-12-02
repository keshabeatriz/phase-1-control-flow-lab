function scuberGreetingForFeet(feet){
  let charges;

  if (feet <= 400) {
    charges = 'This one is on me!';
  } else if (400 < feet && feet <= 2000){
    charges = 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    charges = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    charges = 'No can do.';
  }
  return charges;
}

function ternaryCheckCity(city){
    return (city === 'NYC') ? "Ok, sounds good." : "No go.";
    }

function switchOnCharmFromTip(tip){
  return (tip === 'generous') ? "Thank you so much."
    :(tip === 'not as generous') ? "Thank you."
    :  "Bye.";
  }