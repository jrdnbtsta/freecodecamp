// create a variable to hold each key in the given source
// filter through the collection to check on two things:
//   1. if the current object has the same property as the given source
//   2. if the value matches the source's value

// return arr


function whatIsInAName(collection, source) {
  
  var srcKey = Object.keys(source);
  
  var arr = collection.filter(function(val){
      
    for(i=0; i<srcKey.length; i++){
      if(!val.hasOwnProperty(srcKey[i]) || val[srcKey[i]] !== source[srcKey[i]]){
        return false;
      }
      
    }
      return true;
  });
  
  return arr;
  
}

var res = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });

console.log(res)