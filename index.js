
//Question:1/////////////////////////

// const findLongestWord = (str) => {
//   if (str.trim().lenght === 0) {
//     return false;
//   }
//   words = str.split(" ");
//   //   words= words.sort((a,b) => a.length-b.length) // without  this fucntion sorting this unicode system
//   //   return words[3]

//   return words.reduce(
//     (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
//     ""
//   );
// };

// console.log(findLongestWord("ahmad Bakhtiyar is A software engineer"));

// Question 2/////////////////////////////////

// const generateHash = (str) => {
//   if (str.length > 280 || str.trim().lenght === 0) {
//     return false;
//   }

//   str = str.split(" ");
//   // console.log(str[1].toUpperCase())
//   //solution:1
//   str = str.map(
//     (curElem) =>
//       // curElem.replace(curElem[0], curElem[0].toUpperCase())
//       //solution:2
//       curElem.charAt(0).toUpperCase() + curElem.slice(1)
//   );

//   console.log(str);
//   str = `#${str.join("")}`;
//   return str;
// };

// console.log(generateHash("my name is ahmad bakhtiyar"));


// Question:3 Calculate how many time one letters in this word

// const countChar = (word,char) => {
//     word = word.toLowerCase();
//     char = char.toLowerCase();

//     totalCount = word.split('').reduce((accum, curChar) => {
//         if(curChar ===char){
//             accum++
//         }
//         return accum
//     },0);
//     console.log(totalCount)
//     return totalCount
// }

// console.log(countChar("MissIsssippi", "I"))

// Question: 4

// const checkTriangleType = (a, b,c) => {
//     if (a===b &&  b ===c)  return 'equilateral'
//     if (a===b || b===c || a===c) return 'isosceles';
//     return "scalene"
// }

// console.log(checkTriangleType(3,3,3));
// console.log(checkTriangleType(3,4,3));
// console.log(checkTriangleType(5,7,8));


// Question: 5

// const sortAscending = (arr) => {
//     return arr.sort((a, b)=> b-a)

// }
//  console.log(sortAscending([5,3,10, 8]))

//Question:6

// const isPalindrome = (str) => {
//     str = str.toLowerCase().replace(/\W/g, '')
//     let r_str = str.split('').reverse().join('')
// console.log(r_str)
// return str === r_str ? true : false
// }

// console.log(isPalindrome("a man, a plan, a canal, Panama"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("hello"))

//Question:7

// const findMax = (arr) => {
//     return Math.max(...arr)
// }

// console.log(findMax([1,5,3,9,2]));
// console.log(findMax([-10,-5,-3,-9,-2]));
// console.log(findMax([5]));
// 
//Question: 8

//  const factorial = (num) =>{
//     let fact = 1
//     for (let i=1;  i<=num; i++){
//         fact = fact * i;
//         // console.log(i)
//             }
//         return  fact
//  }
// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(3));
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
// const removeDuplicates =(arr) =>{
//     let newArr = [...new Set(arr)]
//     return newArr
// }
// console.log(removeDuplicates([1, 2, 3, 1, 2, 9,3, 4,6 ,5]))

//Question: 13------------- Count of Vowels
// const countVowels = (str) => {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
    
//     let arr = str.split('')
//     console.log(arr)
//     let count= 0;
//     for (let char of arr){
//         if (vowels.includes(char.toLowerCase()))
//             count++
//     } 
//     return count
// }
// console.log((countVowels('Hello Word')))
// console.log((countVowels('The quick brown fox')))

//Question: 14------------- Find out Power of 2
  const isPowerofTwo = (num) => {
    let op = false;
    for(let   i=1; i<num; i++){
        if (2**i ===num)
            op=true
    }
    return op;

  }
console.log((isPowerofTwo(0)))
console.log((isPowerofTwo(16)))