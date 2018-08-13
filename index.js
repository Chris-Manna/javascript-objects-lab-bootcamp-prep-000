var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  console.log(recipes);
  return Object.assign({}, object, {key: value})
  // return object
}
