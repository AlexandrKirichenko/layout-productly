// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.


nums = [1,2,3,1,1,3]



let result = 0
nums.forEach((number, index) => {
  index = nums.indexOf(number, index + 1)
  console.log("I inside lvl 000000000000", index)
  while(index > 0) {
    console.log("I inside lvl 0.5", index)
    result++
    index = nums.indexOf(number, index + 1)
    console.log("I inside lvl 11111111111", index)
  }
  return result
})
console.log("----------------RES---------------",result)

// var numIdenticalPairs = function(nums) {
//   let result = 0
//   nums.forEach((number, index) => {
//     index = nums.indexOf(number, index + 1)
//     while(index > 0) {
//       result++
//       index = nums.indexOf(number, index + 1)
//     }
//   })
//   return result
// };
//
// numIdenticalPairs([1,2,3,1,1,3]);
// console.log(numIdenticalPairs);