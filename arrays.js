var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, herseys) { return [herseys,...chocolateBars] }
function destructivelyAddElementToBeginningOfArray(chocolateBars, herseys) { chocolateBars.unshift(herseys)
return chocolateBars}
function addElementToEndOfArray(chocolateBars, herseys) { return [...chocolateBars, herseys] }
function destructivelyAddElementToEndOfArray(chocolateBars, herseys) { chocolateBars.push(herseys)
return chocolateBars}
function accessElementInArray(chocolateBars, index) {
  return console.log(chocolateBars[0]);
}
function removeElementFromBeginningOfArray(chocolateBars) { return chocolateBars.slice(1) }
function destructivelyRemoveElementToBeginningOfArray(chocolateBars) { chocolateBars.shift()
return chocolateBars}
function removeElementRemoveEndOfArray(chocolateBars, herseys) { return [...chocolateBars, herseys] }
function destructivelyRemoveElementFromEndOfArray(chocolateBars, herseys) { chocolateBars.push(herseys)
return chocolateBars}