exports.reverseString = function (string) {
   arr = string.split("");
   rev = arr.reverse();
   str= rev.toString();
   if(str.replace( /,/g, "" ) === string) {
    return true;
   }else {
     return str.replace( /,/g, "" );
   }
    
  }

