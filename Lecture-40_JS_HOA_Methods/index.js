// console.log("High Order Array Methods")

// map, filter, reduce
// map => return array
// filter => return array
// reduce => return single value

// map
// let arr = [1,2,3,4];

// console.log("Original Array = ",arr)

// let result = arr.map((e)=>e*20);

// console.log("New Array = ",result)

// filter
// let arr = [1,2,3,4];

// const result = arr.filter((superman)=>superman % 2== 0);

// console.log(result)

// reduce
let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce((prev, el) => {
  console.log("prev = ", prev, " el = ", el);
  return prev + el;
});

console.log(sum);

// prev el => prev + el
// 0    1  => 1
// 1   2   => 3
// 3   3  => 6
// 6   4  => 10
//10  5   => 15
