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

function countUniqueValues(arr){
    let obj = {}
    for(let i=0;i<arr.length;i++){
        obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1; 
    }
    return Object.keys(obj).length
}

//works only if sorted arr
function sumZero(arr) {
    let left = 0
    let right = arr.length-1
    while(left<right){
        let sum = arr[left]+arr[right]
        if(sum===0){
            return (arr[left],arr[right])
        } else if(sum>0){
            right--
        } else{
         left++
        }
    }
}