var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, herseys) { return [herseys,...chocolateBars] }
function destructivelyAddElementToBeginningOfArray(chocolateBars, herseys) { chocolateBars.unshift(herseys)
return chocolateBars}
function addElementToEndOfArray(chocolateBars, herseys) { return [...chocolateBars, herseys] }
function destructivelyAddElementToEndOfArray(chocolateBars, herseys) { chocolateBars.push(herseys)
return chocolateBars}
var myArray = [0,1,2,3]
function accessElementInArray(array, index) {
  return myArray[3]
}
function removeElementFromBeginningOfArray(chocolateBars) { return chocolateBars.slice(1) }
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) { chocolateBars.shift()
return chocolateBars}
function removeElementFromEndOfArray(chocolateBars) { return chocolateBars.slice(0, chocolateBars.length - 1) }
function destructivelyRemoveElementFromEndOfArray(chocolateBars) { chocolateBars.pop()
return chocolateBars}