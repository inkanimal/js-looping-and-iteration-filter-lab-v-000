// Code your solution in this file
function findMatching(drivers, match) {
  let newMatch = drivers.filter(function(matches) {
    let check = match.toLowerCase();
    if (matches === match) {
        return matches === match;
    }
    else if (matches === check) {
        return matches === check;
    }
  } );
  return newMatch;
}

function fuzzyMatch(drivers, string){
  drivers.filter(function(name){})
}

function matchName(drivers, match){
  return drivers.filter(function(name){
    return name.toLowerCase().indexOf(match.toLowerCase()) === 0;
  })
}