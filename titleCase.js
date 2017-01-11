function titleCase(str) {
  var res = str.toLowerCase().split(' ').map(function(val){
    
    return val[0].toUpperCase() + val.substr(1);
    
  });
  return res.join(' ');
}

titleCase("I'm a little tea pot");