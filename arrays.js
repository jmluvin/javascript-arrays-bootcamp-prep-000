var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, herseys) { return [herseys,...chocolateBars] }
function destructivelyAddElementToBeginningOfArray(chocolateBars, herseys) { chocolateBars.unshift(herseys)
return chocolateBars}
function addElementToEndOfArray(chocolateBars, herseys) { return [...chocolateBars, herseys] }
function destructivelyAddElementToEndOfArray(chocolateBars, herseys) { chocolateBars.push(herseys)
return chocolateBars}
function accessElementInArray(chocolateBars, 0) {
  return console.log(chocolateBars[0])
}