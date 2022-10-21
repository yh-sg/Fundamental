const findFactorialIterative = (num:number):number => {
    let result = 1;
    numberValidator(num);
    for (let i = num; i > 0; i--) {
        result *= i; 
    }
    return result;
}

const findFactorialRecursive = (num:number):number => {
    // 1. Identify the base case
    numberValidator(num);
    let base = num,
        count = num;

    if(count===1)
        return base;

    // 2. Identify the recursive case
    // 3. Get closer and closer and return. 
    return base *= findFactorialRecursive(count-1);
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

    let result = 1;
    // 2. Identify the recursive case
    // 3. Get closer and closer and return. 

    return result = fabonacciRecursive(num-1) + fabonacciRecursive(num-2);
}

const numberValidator = (num:number):void => {
    if(num<=0)
        throw new Error("Number cannot be lesser than 1");
    return;
}

const countDownToZero = (num:number):void => {
    return;
}

const reverseStr = (str:string):string => {
    return "";
}

const isPalindrome = (str:string):boolean =>{
    return false;
}