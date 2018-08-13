var recipes = {}
function updateObjectWithKeyAndValue(object,key,value) {
  console.log(recipes);
  return Object.assign(recipes, object, {key: value})
  // return object
}
