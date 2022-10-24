const findFactorialIterative = (num:number):number => {
    if(num<=0)
        throw new Error("Number cannot be lesser than 1");
        
    let result = 1;

    for (let i = num; i > 0; i--) {
        result *= i; 
    }
    
    return result;
}

const findFactorialRecursive = (num:number):number => {
    // 1. Identify the base case
    if(num<=0)
        throw new Error("Number cannot be lesser than 1");

    if(num===1)
        return num;

    // 2. Identify the recursive case
    // 3. Get closer and closer and return. 
    return num * findFactorialRecursive(num-1);
}

const fabonacciIterative = (num:number):number => {
    
    if(num<=0) return 0;

    if(num===1 || num===2) return 1;

    let arr = [0,1,1]

    for (let i = 3; i <= num; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }

    return arr[num];
}

const fabonacciRecursive = (num:number):number => {
    
    // 1. Identify the base case
    if(num<=0) return 0;
    if(num===1 || num===2) return 1;

    // 2. Identify the recursive case
    // 3. Get closer and closer and return. 

    return fabonacciRecursive(num-1) + fabonacciRecursive(num-2);
}

const countDownToZero = (num:number):number => {
    if(num<=0) return num;
    return countDownToZero(num-1);
}

const reverseStr = (str:string):string => {
    if(str.length===1) return str;
    return reverseStr(str.slice(1)) + str[0];
}

const isPalindrome = (str:string):boolean =>{
    if(str.length<=1) return false;
    if(str.length===2) return true;
    if(str[0]===str[str.length-1]) return isPalindrome(str.slice(1,-1));

    return false;
}

const allCoinFlipPossibilities = (num:number):string[] => {
    if(num<=0)
        throw new Error("Number cannot be lesser than 1");
    const results:string[] = [];
    function recursiveCoinFlips(stem=""){
        if(stem.length ===  num){
            results.push(stem);
        }else{
            recursiveCoinFlips(stem+"H");
            recursiveCoinFlips(stem+"T");
        }
    }
    recursiveCoinFlips();
    return results;
}