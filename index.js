
//Question:9----------------------------------------
// const calculateavarage = (arr) => {
//     const total = arr.reduce((accum, currEle) => accum + currEle, 0)
//     console.log(total)
//     return total/ arr.length
//     const total = arr. sort(function(a, b) {return (a-b)} )
//     console.log(total)
//     return total
// }
// console.log((calculateavarage([5, 100, 2, 8])))


//Question: 10--------------------------------------

// const arrayAreEquals = (arr1, arr2) => {
//     if (arr1.length != arr2.length)
//         return false
//     return arr1.every((curVal, index) => curVal === arr2[index])
//     }
// console.log(arrayAreEquals([1, 2, 3], [1, 2, 3]))
// console.log(arrayAreEquals([1, 2, 3], [1, 2, 4]))
// console.log(arrayAreEquals([], []))

//Question: 11------------- sum of digit
// const sumofdigits = (num) => {
//     let arr = Array.from(String(num), Number)
//     console.log(arr)
//     let sumofarr = arr.reduce((accum, curEle) => accum + curEle )
//     return sumofarr
// }
// console.log((sumofdigits(1234)))
// console.log((sumofdigits(12364)))
// console.log((sumofdigits(12734)))


//Question: 12------------- Remove of Duplicate
const removeDuplicates =(arr) =>{
    let newArr = [...new Set(arr)]
    return newAr12r
12

console.log(remo12veDuplicates([1, 2, 3, 1, 2, 9,3, 4,6 ,5]))