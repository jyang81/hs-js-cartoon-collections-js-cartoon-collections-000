function dwarfRollCall(dwarves) {
  var dwarfNames = [];
  
  for (let i = 0; i < dwarves.length; i++) {
    dwarfNames.push(`${i + 1}. ${dwarves[i]} `)
  }
  
  return `${dwarfNames.join('')}`
  
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  
  for (let i = 0; i < planeteerCalls.length; i++) {
    calls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
   return calls;
  
}

function longPlaneteerCalls(words) {
  
  var n = words.length;
  if (n > 4) {
    return true
  }
  
  else {
    return false
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  var answer = "no cheese!";
  for (let i = 0; i < foods.length; i++) {
    
    if (foods[i] == cheese[0] || 
    foods[i] == cheese[1] || 
    foods[i] == cheese[2]) {
     answer = foods[i];
     console.log(answer);
    }
}
console.log(answer);
return answer;
  
}
