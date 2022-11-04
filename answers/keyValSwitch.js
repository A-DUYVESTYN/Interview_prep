// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
// {a: 1, b : 2, c: 3}    returns.  {1:"a", 2:"b", 3:"c"}

const keyValSwitcher = function (obj) {
  const newObj = {};
  for(const key in obj) {
  	newObj[obj[key]] = key
  }
	return newObj
}

const keyValSwitcher2 = function (obj) {
  const newObj = {}
  Object.keys(obj).map( key => {
    newObj[obj[key]] = key
  })
  return newObj
}

const keyValSwitcher3 = function (data) {
  return Object.keys(data).reduce((obj, key) => (obj[data[key]] = key, obj), {});
}

// test case should return  {1:"a", 2:"b", 3:"c"}
console.log(keyValSwitcher({a: 1, b : 2, c: 3})) 
console.log(keyValSwitcher2({a: 1, b : 2, c: 3}))
console.log(keyValSwitcher3({a: 1, b : 2, c: 3})) 