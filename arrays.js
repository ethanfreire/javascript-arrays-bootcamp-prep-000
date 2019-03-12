
var chocolateBars = new Array('snickers','hundred grand','kitkat','skittles'
)
function addElementToBeginningOfArray(chocolateBars, 'mars Bars'){
  [...chocolateBars, 'mars Bars']
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray(chocolateBars,'mars Bars'){
  var chocolateBars =[...chocolateBars, 'mars Bars']
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars,'mars Bars'){
  ['mars Bars',...chocolateBars]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray(chocolateBars,'mars Bars'){
  var chocolateBars = ['mars Bars', ...chocolateBars]
return chocolateBars
}
function accessElementInArray(chocolateBars, 0){
  return chocolateBars[0]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(1)
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars(0, chocolateBars.length - 1)
  return chocolateBars
}
