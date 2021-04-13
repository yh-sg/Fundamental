function validAnagram(str1,str2){
        if(str1.length!==str2.length) return false;
        let arr1 = str1.split("");
        let arr2 = str2.split("");
        for(let i=0;i<arr1.length;i++){
            arr2.indexOf(arr1[i])>=0 ? arr2.splice(arr2.indexOf(arr1[i]),1) : false
        }
        return true;
  }

  function areThereDuplicates(...args) {
    let argsValues = [...args];
    for(let i=0;i<args.length;i++){
        let value = argsValues.splice(0,1)[0];
        if(argsValues.indexOf(value)>=0){
            return true;
        }
    }
    return false;
}

