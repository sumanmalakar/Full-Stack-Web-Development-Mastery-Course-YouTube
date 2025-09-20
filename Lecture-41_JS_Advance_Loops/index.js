// console.log("Advance Loops")

// for - in, for - of, forEach

// for - in
const phone = {
    brand:'Apple',
    model:'iphone - 16',
    price : 100000,
    camera:'20 MP',
    ram: '16 GB',
    rom:'128 GB'
}

// for(let key in phone){
//     // console.log(key,"=> ",phone[key])
//     // console.log(key)
//     console.log(phone[key])
// }

// for of
// const nums = [10,20,30,40,50];

// for(let value of nums){
//     console.log(value)
// }

// for(let key in nums){
//     console.log(key, "=> ",nums[key])
// }

// forEach
let nums = [10,20,30,40];

nums.forEach((value,index,nums)=>{
    console.log(value," => ",index," => ",nums)
})