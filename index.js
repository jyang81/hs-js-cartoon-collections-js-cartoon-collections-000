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
  let cheese = ["cheddar", "gouda","camembert"]
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === cheese[0] || cheese[1] || cheese[2]) {
     return cheese[i];
    }
 
  }
    
  
}

