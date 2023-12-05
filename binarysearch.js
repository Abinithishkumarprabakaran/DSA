const binarysearch = (nums, search) => {
    let start = 0
    let end = nums.length-1

    while (nums[start] <= nums[end]) {
        let mid = Math.floor((start + end) / 2)

        if (nums[mid] === search) {
            return mid
        }
        else if (nums[mid] < search) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }
    }
    return "Not Found";
}

console.log(binarysearch([1,2,3,4,5,6,7,8,9,10], 41))