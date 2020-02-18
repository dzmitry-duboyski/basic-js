module.exports = function createDreamTeam(input) {
  if(Array.isArray(input)){
    let result = input.filter(a=>(Array.isArray(a)===false))
    result = input.filter(a=>(typeof(a)==='string'))
    result = result.map(elem=>elem.trim())
    result = result.map(elem=>elem[0])
    result = result.map(elem=>elem.toUpperCase())
    result = result.sort()
    result = result.join('') 
    return result
  }
  return false
};