module.exports = class DepthCalculator {
  calculateDepth(arr, valueDeep = 0) {
      valueDeep++
      arr = arr.filter((elem) => { return Array.isArray(elem); });

      if (arr.length === 0) {
        return valueDeep;
      }
        arr = arr.flat();
     return this.calculateDepth(arr, valueDeep)
  }
}

