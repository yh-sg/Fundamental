let arr = [6,12,1,34,7,4,9],
    sortedArr = [1,4,6,7,9,12,34];

const linearSearch = (arr:string[]|number[], searchValue:string|number):string => {
    //Linear search is just simply loop and search
    for(const [i,val] of arr.entries()) {
        if(searchValue===val) 
            return `Value ${val} was found in position ${i} for searching in ${arr}`
    }
    return `Value ${searchValue} was not found in ${arr}`
};

const binarySearch = (arr:number[], val:number):string => {
    //Only works if array is sorted. Requires 3 pointer
    let left=0,
        right=arr.length-1;

    while(left<=right) {
        let mid=Math.floor(left+right/2);

        if(arr[mid]===val) return `Value ${val} was found in position ${mid} for searching in ${arr}`

        //Check mid value higher or lower, adjust the pointer accordingly.
        val<arr[mid] ? right = mid-1 : left = mid+1;
    }
    
    return `Value ${val} was not found in ${arr}`
};

const BFS = () => {
    
};

const DFS = () => {
    
};