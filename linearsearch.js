const linearSearch = (arr, search) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            return i;
        }
    }
    return "Not Found";
}

// console.log('Linear Search: ', linearSearch([1,2,3,4,5], 5));

const globalLinearSearch = (arr, search) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == search) {
            result.push(i)
        }
    }
    if (!result) {
        return "Not Found";
    }
    return result
}

console.log('Global Linear Search: ', globalLinearSearch([1,2,1,2,3,2], 2))