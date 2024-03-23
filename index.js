function scuberGreetingForFeet(feet){
  if (feet <= 400){
  return "This one is on me!";
  } else if (feet <= 2000){
    return "That will be twenty bucks.";
  } else if (2000 < feet && feet <= 2500){
 return "I will gladly take your thirty bucks."
} else {
  return "No can do.";
}
}

function ternaryCheckCity(City){
  return City === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      case "Not as generous":
      return "Thank you.";
      default:
      return "Bye.";
  }
}