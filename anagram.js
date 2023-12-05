let s = "anagram"
let t = "nagaram"

// const validAnagram = (s, t) => {
//     if (s.length != t.length) {
//         return false;
//     }

//     for (data of s.split("")) {
//         for (item of t.split("")) {
//             if (data != item)
//         }
//     }
// }

// console.log(s.split(""))

const linearSearch = (arr, search) => {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] == search) {
            return i
        }
    }
    return "Not Found";
}

console.log(linearSearch([1,2,3,4,5], 6));