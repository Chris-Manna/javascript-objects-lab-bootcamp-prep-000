var recipes = {}
function updateObjectWithKeyAndValue(object,key,value) {
  console.log(object);
  return Object.assign(recipes, object, {key: value})
  // return object
}
