module.exports = function countCats(a) {
  const result = a.join(',').split(',').filter(element=>element=='^^').length
  return result
};
