module.exports = function repeater(str, options) {
  let newString ='';
  let subString ='';
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';
  if(!options.repeatTimes) options.repeatTimes = '';
  if(!options.additionRepeatTimes) options.additionRepeatTimes = '';


  //есть ли дополнение к строке?
  if(String(options.addition).length > 0 && String(options.addition) !== 'undefined'){
    // есть  ли повторитель для дополнения?
    if(!!options.additionRepeatTimes){
      //оновной код для  дополнения
      for(i=0; i<options.additionRepeatTimes; i++){
        if(i === (options.additionRepeatTimes - 1)){
          subString += options.addition;
          continue;
        }
        subString += (options.addition + options.additionSeparator)
      }
    } else {     // есть  ли повторитель нет
      subString += options.addition;
    }
  }
  
  //если повторы есть
  if(!!options.repeatTimes){
    //основной функционал
    for(i=0; i<options.repeatTimes; i++){
      if(i === (options.repeatTimes - 1)){
        newString += (str + subString)
        continue;
      }
      newString += (str + subString + options.separator)
    }
  } else {   //если пповторов нету
    newString += (str + subString)
    console.log('here')
  }
   return newString;
};
  