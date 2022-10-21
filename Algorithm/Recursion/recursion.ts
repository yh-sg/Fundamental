const findFactorialIterative = (num:number):number => {
    let result = 1;
    numberValidator(num);
    for (let i = num; i > 0; i--) {
        result *= i; 
    }
    return result;
}

const findFactorialRecursive = (num:number):number => {
    return 0;
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

const isPalindrome = (str:string):boolean => {
    return false;
}