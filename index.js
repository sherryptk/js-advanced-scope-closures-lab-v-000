function produceDrivingRange(blockRange){
  return function(streetOne, streetTwo){
    first = parseInt(streetOne.slice(0, -2))
    second = parseInt(streetTwo.slice(0, -2))
    difference = Math.abs(first - second)
    if(difference >= blockRange){
      return `${Math.abs(blockRange - difference)} blocks out of range`
    } else {
      return `within range by ${blockRange - difference}`
    }
 }
}

function produceTipCalculator(fare){
  return function(tip){
    return fare * tip;
  }
}

function createDriver(){
  let driverId = 1
  return class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    }
  }
}
