var recipes = new Object ({meat:'chicken'})

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, recipes, { [key]: value })
}