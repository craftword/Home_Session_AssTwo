exports.words = function (string) {
    str = string.replace(/(\r\n|\n|\t|\s{2,})/gm," ");
    arr = str.split(" ");
    wrd = {};
    
    function getCount(arr,val)
{
    var ob={};
    var len=arr.length;
    for(var k=0;k<len;k++)
    {
        if(ob.hasOwnProperty(arr[k]))
        {
            ob[arr[k]]++;
            continue;
        }
        ob[arr[k]]=1;
    }
    return ob[val];
}
 



    for (i=0; i < arr.length; i++) {
         wrd[arr[i]] = getCount(arr,arr[i]);
      }
      
    
    return wrd;
}