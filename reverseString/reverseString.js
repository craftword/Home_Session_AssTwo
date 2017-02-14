exports.reverseString = function (string) {
   arr = string.split("");
   rev = arr.reverse();
   str= rev.toString();
   if (string === "") {
    	return null;
    
   }
   else if(str.replace( /,/g, "" ) === string) {
    return true;
     }
    else {
     return str.replace( /,/g, "" );
   }
    
  }

