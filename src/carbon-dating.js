const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(input) {
  if((typeof(input)) === 'string'){
    input=parseFloat(input)
    if((typeof(input)) ==='number'){
      if(input > 0 && input < 15){
        let numerator = (MODERN_ACTIVITY / input)// 
        numerator = Math.log(numerator)//верх
        let res=((numerator / 0.693)*HALF_LIFE_PERIOD)
        return Math.ceil(res)
      }
      return false
    }
  } 
    return false
};
